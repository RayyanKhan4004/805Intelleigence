'use client'

import React, { useState } from 'react'
import { CardContent, CardHeader, CardTitle } from '@/components/UI/card'
import { Input } from '@/components/UI/input'
import { Button } from '@/components/UI/button'
import { Label } from '@/components/UI/label'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import Typography from '@/components/theme/Typography'
import Card from '@/components/theme/Card'
import { useLoginMutation } from '../authApi'
// import { useForm } from 'node_modules/react-hook-form/dist/useForm'
import { useForm } from 'react-hook-form'
import { LoginFormValues } from '../types'
import { toast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from './schema/signup.schema'
import { Icon } from '@/shared/icons/Icon'
import { loginSchema } from './schema/login.schema'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [login, { isLoading, error }] = useLoginMutation()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data).unwrap()
      toast({
        title: 'Success',
        description: 'Login successfully',
      })
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err?.data?.message || 'Login failed',
        variant: 'destructive',
      })
    }
  }
  return (
    <Card className=" shadow-2xl rounded-2xl overflow-hidden flex flex-col justify-center w-full h-[811px] p-10 relative">
      <Typography
        variant="h6"
        className="font-semibold text-app-primary mb-[72px] text-center break-words  p-0"
      >
        LOGIN
      </Typography>
      <CardContent className="p-0 space-y-5 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 gap-[24px]">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              {...register('email')}
              id="email"
              type="email"
              placeholder="sergio123@example.com"
              name="email"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div className="space-y-2 relative">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                {...register('password')}
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                name="password"
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

          {/* Submit Button */}
          <Button className="w-full bg-app-primary hover:opacity-90 text-white font-bold h-12 rounded-lg text-base shadow-lg transition-all duration-200">
            Login
          </Button>
        </form>

        {/* Forgot Password */}
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

        {/* Signup Link */}
        <div className="text-center absolute bottom-[80px] left-1/2 -translate-x-1/2">
          <Typography variant="TableText" className="text-white font-medium inline-block">
            Don’t have an account?{' '}
            <Link
              href="/signup"
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
