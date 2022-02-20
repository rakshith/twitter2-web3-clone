import { useRouter } from 'next/router'
import React, { createContext, useEffect, useState } from 'react'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  /**
   * Initiates MetaMask wallet connection
   */
  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }

  /**
   * Checks if there is an active wallet connection
   */
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) {
      console.log('check ethereum present', window.ethereum)
      return
    }
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })

      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])

        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (e) {}
  }

  return (
    <TwitterContext.Provider
      value={{ appStatus, currentAccount, connectWallet }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
