"use client"

import { useState, useEffect } from "react"
import type { ItemData } from "@/utils/common/types"
import type { IExtrinsicManager } from "@/utils/common/extrinsicManager"

interface CollectionsExplorerProps {
  extrinsicManager: IExtrinsicManager
  signerAddress?: string
}

export const CollectionsExplorer = ({ extrinsicManager, signerAddress }: CollectionsExplorerProps) => {
  const [collections, setCollections] = useState<number[]>([])
  const [items, setItems] = useState<number[]>([])
  const [chosenCollection, setChosenCollection] = useState<number | null>(null)
  const [chosenItem, setChosenItem] = useState<number | null>(null)
  const [chosenItemData, setChosenItemData] = useState<ItemData | null>(null)

  useEffect(() => {
    const fetchCollections = async () => {
      if (!extrinsicManager) return

      try {
        const collections = await extrinsicManager.getCollections()
        setCollections(collections)
      } catch (error) {
        console.error("Failed to fetch collections:", error)
      }
    }

    fetchCollections()
  }, [extrinsicManager, signerAddress])

  useEffect(() => {
    if (!chosenCollection || !extrinsicManager) {
      return
    }

    const fetchItems = async () => {
      try {
        const items = await extrinsicManager.getTokens(chosenCollection)
        setItems(items)
      } catch (error) {
        console.error("Failed to fetch items:", error)
      }
    }

    fetchItems()
  }, [chosenCollection, extrinsicManager])

  useEffect(() => {
    if (!chosenCollection || !chosenItem || !extrinsicManager) {
      return
    }

    const fetchItemData = async () => {
      try {
        const itemData = await extrinsicManager.getTokenData(chosenCollection, chosenItem)
        setChosenItemData(itemData)
      } catch (error) {
        console.error("Failed to fetch item data:", error)
      }
    }

    fetchItemData()
  }, [chosenCollection, chosenItem, extrinsicManager])

  return (
    <div className="space-y-6">
      {chosenItemData && (
        <div className="p-6 rounded-lg border border-gray-200 mb-8 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Selected Item Details</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Metadata:</h3>
              <p className="mt-1 text-gray-600">{chosenItemData.metadata || "No metadata available"}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Attributes:</h3>
              {chosenItemData.attributes?.length > 0 ? (
                <ul className="mt-1 space-y-1 list-disc list-inside text-gray-600">
                  {chosenItemData.attributes?.map(([key, value]) => (
                    <li key={key}>
                      <span className="font-medium">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-gray-600">No attributes available</p>
              )}
            </div>
          </div>
        </div>
      )}

      {collections.length > 0 ? (
        <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Collections</h2>
          <ul className="space-y-2">
            {collections.map((id) => (
              <li key={id} className="border-b pb-2 last:border-b-0 last:pb-0">
                <button
                  onClick={() => {
                    setChosenCollection(id)
                    setChosenItem(null)
                    setChosenItemData(null)
                  }}
                  className={`text-left w-full py-1 px-2 rounded ${
                    chosenCollection === id ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  Collection ID: {id}
                </button>
                {chosenCollection === id && items.length > 0 && (
                  <ul className="ml-6 mt-2 space-y-1">
                    <li className="text-sm text-gray-500 font-medium">Items:</li>
                    {items.map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => setChosenItem(item)}
                          className={`text-left w-full py-1 px-2 rounded text-sm ${
                            chosenItem === item ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-100"
                          }`}
                        >
                          Item ID: {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {chosenCollection === id && items.length === 0 && (
                  <p className="ml-6 mt-1 text-sm text-gray-500">No items found in this collection</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
          <p className="text-gray-500">No collections found</p>
        </div>
      )}
    </div>
  )
}

