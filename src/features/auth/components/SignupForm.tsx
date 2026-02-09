'use client'

import React, { useState } from 'react'
import {  CardContent, CardHeader, CardTitle } from '@/components/UI/card'
import { Input } from '@/components/UI/input'
import { Button } from '@/components/UI/button'
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

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <Card className="bg-[#E7EEEC]/90 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden w-full">
      <CardHeader className="pb-2 pt-8 px-8">
        <CardTitle className="text-3xl font-bold text-app-primary text-center">
          Create your account
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-5">
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-600 font-medium">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="e.g. John"
              className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-600 font-medium">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="e.g. Franklin"
              className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg"
            />
          </div>
        </div>

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

        {/* Company/Brokerage */}
        <div className="space-y-2">
          <Label htmlFor="brokerage" className="text-gray-600 font-medium">
            Company/Brokerage
          </Label>
          <Input
            id="brokerage"
            placeholder="sergio123@example.com"
            className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg"
          />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <Label htmlFor="role" className="text-gray-600 font-medium">
            Role
          </Label>
          <Select>
            <SelectTrigger
              id="role"
              className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg text-gray-500"
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
        </div>

        {/* Zip & Company Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="zip" className="text-gray-600 font-medium">
              Enter Zip
            </Label>
            <Input
              id="zip"
              placeholder="1213"
              className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company2" className="text-gray-600 font-medium">
              Company
            </Label>
            <Input
              id="company2"
              placeholder="xyz"
              className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg"
            />
          </div>
        </div>

        {/* Password Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div className="space-y-2 relative">
            <Label htmlFor="confirmPassword" className="text-gray-600 font-medium">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="********"
                className="bg-white border-transparent focus:border-gray-300 h-12 rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-app-primary hover:opacity-90 text-white font-bold h-12 rounded-lg mt-4 text-base shadow-lg transition-all duration-200">
          Create Account
        </Button>
      </CardContent>
    </Card>
  )
}
