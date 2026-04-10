'use client'

import { Icon } from '@/shared/icons/Icon'
import React, { useEffect, useState } from 'react'
import { CardContent } from '@/components/UI/card'
import { Input } from '@/components/UI/input'
import { Button } from '@/components/UI/button'
import { useSignupMutation } from '../authApi'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/UI/select'
import { Label } from '@/components/UI/label'
import { EyeOff } from 'lucide-react'
import Card from '@/components/theme/Card'
import { toast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from './schema/signup.schema'
import { useForm } from 'react-hook-form'
import { SignupFormValues } from '../types'
import Typography from '@/components/theme/Typography'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [signup, { isLoading }] = useSignupMutation()
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') ?? 'basic'

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(signupSchema),
  })

  useEffect(() => {
    setValue('membership', plan)
    setValue('username', plan.charAt(0).toUpperCase() + plan.slice(1))
  }, [plan, setValue])

  const onSubmit = async (data: SignupFormValues) => {
    try {
      await signup(data).unwrap()
      setEmailSent(true)
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err?.data?.message || 'Signup failed',
        variant: 'destructive',
      })
    }
  }

  if (emailSent) {
    return (
      <Card className="backdrop-blur-sm min-w-[50%] max-lg:!w-full border-0 shadow-2xl rounded-2xl overflow-hidden p-10">
        <div className="flex flex-col items-center justify-center gap-6 py-10 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <Icon name="CheckCircle" size={40} className="text-app-green" />
          </div>
          <Typography variant="h6" className="text-app-primary font-semibold p-0">
            Check your email
          </Typography>
          <Typography variant="TableText" className="text-app-primary max-w-[320px]">
            We sent a verification link to your email address. Please verify your account before
            logging in.
          </Typography>
          <Link href="/login">
            <Button className="px-10">Go to Login</Button>
          </Link>
        </div>
      </Card>
    )
  }

  return (
    <Card className="backdrop-blur-sm min-w-[50%] max-lg:!w-full border-0 shadow-2xl rounded-2xl overflow-hidden p-10">
      <Typography
        variant="h6"
        className="text-[48px] font-semibold text-app-primary mb-6 text-center text-nowrap p-0 w-full"
      >
        Create your account
      </Typography>
      {plan && (
        <p className="text-center text-app-green font-semibold mb-4 capitalize">Plan: {plan}</p>
      )}
      <CardContent className="p-0 space-y-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input type="hidden" {...register('membership')} />
          <input type="hidden" {...register('username')} />

          <div className="gap-[16px] flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input {...register('first_name')} id="firstName" placeholder="e.g. John" />
                <p className="text-red-500 text-sm">{errors.first_name?.message}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input {...register('last_name')} id="lastName" placeholder="e.g. Franklin" />
                <p className="text-red-500 text-sm">{errors.last_name?.message}</p>
              </div>
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="brokerage">Company/Brokerage</Label>
              <Input {...register('company')} id="brokerage" placeholder="Company name" />
              <p className="text-red-500 text-sm">{errors.company?.message}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={value => setValue('role', value, { shouldValidate: true })}>
                <SelectTrigger
                  id="role"
                  className="bg-white border-transparent focus:border-gray h-12 text-app-primary rounded-[16px]"
                >
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agent">Real Estate Agent</SelectItem>
                  <SelectItem value="broker">Broker</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-red-500 text-sm">{errors.role?.message}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zip">Enter Zip</Label>
                <Input {...register('zip')} id="zip" placeholder="1213" />
                <p className="text-red-500 text-sm">{errors.zip?.message}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company2">Company</Label>
                <Input {...register('company2')} id="company2" placeholder="xyz" />
                <p className="text-red-500 text-sm">{errors.company2?.message}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-app-greyText"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Icon name="Eye" size={20} />}
                  </button>
                </div>
                <p className="text-red-500 text-sm">{errors.password?.message}</p>
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    {...register('confirm_password')}
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="********"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-app-greyText"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Icon name="Eye" size={20} />}
                  </button>
                </div>
                <p className="text-red-500 text-sm">{errors.confirm_password?.message}</p>
              </div>
            </div>
          </div>

          <Button type="submit" isloading={isLoading} className="w-full mb-4">
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
