export type UseStateTuple<T> = [T, React.Dispatch<React.SetStateAction<T>>]
export interface IStore {
  people: UseStateTuple<IPerson[]>
}
export interface IPerson {
  id: number
  firstName: string
  lastName: string
  age: number
}