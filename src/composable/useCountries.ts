import cn from '@/assets/flag/cn.png?url'
import hk from '@/assets/flag/hk.png?url'
import jp from '@/assets/flag/jp.png?url'
import tw from '@/assets/flag/tw.png?url'
import { getCountryCallingCode, type CountryCallingCode, type CountryCode } from 'libphonenumber-js'

export interface CountryOption {
  country: CountryCode
  countryCallingCode: CountryCallingCode
  icon: string
}

interface UsePhoneRes {
  countryOptions: CountryOption[]
}

const countryOptions: CountryOption[] = [
  {
    country: 'TW',
    icon: tw,
  },
  {
    country: 'JP',
    icon: jp,
  },
  {
    country: 'HK',
    icon: hk,
  },
  {
    country: 'CN',
    icon: cn,
  },
].map(v => {
  return {
    ...v,
    country: v.country as CountryCode,
    countryCallingCode: getCountryCallingCode(v.country as CountryCode),
  }
})

export const useCountries = (): UsePhoneRes => {
  return {
    countryOptions,
  }
}
