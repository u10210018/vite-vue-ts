export const useHello = () => {
  const sayHi = () => {
    console.log('Hi!')
  }

  return {
    sayHi,
  }
}
