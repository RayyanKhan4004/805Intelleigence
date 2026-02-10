'use client'

import React, { useState } from 'react'
import { CardContent, CardHeader, CardTitle } from '@/components/UI/card'
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
import { Eye, EyeOff } from 'lucide-react'
import Card from '@/components/theme/Card'
import { toast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from './schema/signup.schema'
import { useForm } from 'react-hook-form'
import { SignupFormValues } from '../types'

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [signup, { isLoading, error }] = useSignupMutation()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(signupSchema),
  })

  const onSubmit = async (data: SignupFormValues) => {
    try {
      await signup(data).unwrap()
      toast({
        title: 'Success',
        description: 'Account created successfully',
      })
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err?.data?.message || 'Signup failed',
        variant: 'destructive',
      })
    }
  }
  return (
    <Card className="backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden w-full p-0">
      <CardHeader className="pb-2 pt-8 px-8">
        <CardTitle className="text-3xl font-bold text-app-primary mb-6 text-center">
          Create your account
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-5 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className='gap-[16px]'> {/* Name Row */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                {...register('first_name')}
                id="firstName"
                placeholder="e.g. John"
                name="first_name"
              />
              <p className="text-red-500 text-sm">{errors.first_name?.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                {...register('last_name')}
                id="lastName"
                placeholder="e.g. Franklin"
                name="last_name"
              />
              <p className="text-red-500 text-sm">{errors.last_name?.message}</p>
            </div>
          </div>

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

          {/* Company/Brokerage */}
          <div className="space-y-2">
            <Label htmlFor="brokerage">Company/Brokerage</Label>
            <Input
              {...register('company')}
              id="brokerage"
              placeholder="sergio123@example.com"
              name="company"
            />
            <p className="text-red-500 text-sm">{errors.company?.message}</p>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={value => setValue('role', value, { shouldValidate: true })}>
              <SelectTrigger
                id="role"
                className="bg-white border-transparent focus:border-gray h-12 rounded-lg text-app-primary"
               
                name="role"
              >
                <SelectValue className="text-primary" placeholder="Select your role" />
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

          {/* Zip & Company Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="zip">Enter Zip</Label>
              <Input {...register('zip')} id="zip" placeholder="1213" name="zip" />
              <p className="text-red-500 text-sm">{errors.zip?.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company2">Company</Label>
              <Input {...register('company2')} id="company2" placeholder="xyz" name="company2" />
              <p className="text-red-500 text-sm">{errors.company2?.message}</p>
            </div>
          </div>

          {/* Password Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
                  name="confirm_password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-red-500 text-sm">{errors.confirm_password?.message}</p>
            </div>
          </div>
           </div>

          {/* Submit Button */}
          <Button
            //      onClick={() =>
            //   toast({
            //     title: "Success",
            //     description: "Account created successfully",
            //   })
            // }
            type="submit"
            isloading={isLoading}
            className="w-full mb-4"
          >
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
