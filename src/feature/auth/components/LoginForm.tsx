'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/card'
import { Input } from '@/components/UI/input'
import { Button } from '@/components/UI/button'
import { Label } from '@/components/UI/label'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import Typography from '@/components/theme/Typography'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Card className="bg-[#E7EEEC]/90 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">
      <CardHeader className="pb-2 px-8">
        <CardTitle className="text-5xl font-normal text-app-primary text-center uppercase tracking-wider ">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-600 font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="sergio123@example.com"
            className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg"
          />
        </div>

        {/* Password */}
        <div className="space-y-2 relative">
          <Label htmlFor="password" className="text-gray-600 font-medium">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-app-primary hover:opacity-90 text-white font-bold h-12 rounded-lg mt-4 text-base shadow-lg transition-all duration-200">
          Login
        </Button>

        {/* Forgot Password */}
        <div className="text-right">
          <Link href="/forgot-password">
            <Typography
              variant="TableText"
              className="text-app-primary font-semibold hover:underline cursor-pointer"
            >
              Forgot password?
            </Typography>
          </Link>
        </div>

        {/* Signup Link */}
        <div className="text-center pt-8">
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
