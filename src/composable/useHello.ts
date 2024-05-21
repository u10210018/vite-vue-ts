interface UseHelloRes {
  sayHi: () => void
}

export const useHello = (): UseHelloRes => {
  const sayHi = () => {
    console.log('Hi!')
  }

  return {
    sayHi,
  }
}
