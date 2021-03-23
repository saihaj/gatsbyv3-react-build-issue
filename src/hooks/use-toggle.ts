import { useCallback, useState } from 'react'

/**
 * Toggle boolean values in state.
 *
 * @param initialState
 * @returns tuple [state, dispatch]
 * @see https://usehooks.com/useToggle/
 */
const useToggle = ( initialState = false ): [boolean, () => void] => {
  const [ state, setState ] = useState( initialState )

  // useCallback to unsure it has a stable identity.
  const toggle = useCallback( () => setState( state => !state ), [] )
  return [ state, toggle ]
}

export default useToggle
