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
import { useForgetPasswordMutation } from '../authApi'
import { useForm } from 'react-hook-form'
import { LoginFormValues } from '../types'
import { toast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'

import { forgetPasswordSchema } from './schema/forget.schema'
import { ForgetPasswordFormValues } from '../types/forgetTypes'

export default function ForgetPasswordForm() {
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordFormValues>({
    resolver: yupResolver(forgetPasswordSchema),
  })

  const onSubmit = async (data: ForgetPasswordFormValues) => {
    try {
      const result = await forgetPassword(data).unwrap()
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
        FORGET-PASSWORD
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

          <Button
            type="submit"
            isloading={isLoading}
            className="w-full bg-app-primary hover:opacity-90 text-white font-bold h-12 rounded-lg text-base shadow-lg transition-all duration-200"
          >
            Submit
          </Button>
        </form>

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
