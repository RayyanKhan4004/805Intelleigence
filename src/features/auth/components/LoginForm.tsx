'use client'

import React, { useState } from 'react'
import { CardContent } from '@/components/UI/card'
import { Input } from '@/components/UI/input'
import { Button } from '@/components/UI/button'
import { Label } from '@/components/UI/label'
import { EyeOff } from 'lucide-react'
import Link from 'next/link'
import Typography from '@/components/theme/Typography'
import Card from '@/components/theme/Card'
import { useLoginMutation } from '../authApi'
import { useForm } from 'react-hook-form'
import { LoginFormValues } from '../types'
import { toast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { Icon } from '@/shared/icons/Icon'
import { loginSchema } from './schema/login.schema'
import { useAppDispatch } from '@/store/hooks'
import { setCredentials } from '../authSlice'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await login(data).unwrap()
      // Save to Redux + localStorage
      dispatch(setCredentials({ access: result.access, refresh: result.refresh, user: result.user }))
      // Set cookie for middleware auth guard
      document.cookie = `accessToken=${result.access}; path=/; max-age=${60 * 60}`
      toast({ title: 'Success', description: 'Login successful' })
      router.push('/reports')
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err?.data?.message || 'Login failed',
        variant: 'destructive',
      })
    }
  }

  return (
    <Card className="backdrop-blur-sm min-w-[50%] max-lg:!w-full border-none shadow-2xl rounded-2xl h-fit p-10">
      <Typography
        variant="h6"
        className="font-semibold text-app-primary mb-[72px] text-center break-words p-0 text-nowrap"
      >
        LOGIN
      </Typography>
      <CardContent className="p-0">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 gap-[24px]">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              {...register('email')}
              id="email"
              type="email"
              placeholder="sergio123@example.com"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                {...register('password')}
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-app-greyText hover:text-app-greyText"
              >
                {showPassword ? <EyeOff size={20} /> : <Icon name="Eye" size={20} />}
              </button>
            </div>
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          <Button
            type="submit"
            isloading={isLoading}
            className="w-full bg-app-primary hover:opacity-90 text-white font-bold h-12 rounded-lg text-base shadow-lg transition-all duration-200"
          >
            Login
          </Button>
        </form>

        <div className="text-right mt-4">
          <Typography variant="TableText">
            <Link
              className="text-app-primary font-semibold hover:underline cursor-pointer"
              href="/forgot-password"
            >
              Forgot password?
            </Link>
          </Typography>
        </div>

        <div className="w-full text-center !mt-[60px]">
          <Typography variant="TableText" className="text-white font-medium inline-block">
            Don't have an account?{' '}
            <Link
              href="/subscription"
              className="font-bold text-app-primary cursor-pointer hover:underline"
            >
              Signup
            </Link>
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
