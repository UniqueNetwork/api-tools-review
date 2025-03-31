"use client"

import { useState } from "react"
import { CreateCollectionForm } from "./CreateCollectionForm"
import { MintItemForm } from "./MintItemForm"
import { SetMetadataForm } from "./SetMetadataForm"
import { SetAttributeForm } from "./SetAttributeForm"
import type { CommonComponentProps } from "@/utils/common/types"

const tabs = [
  { key: "create", label: "Create Collection", component: CreateCollectionForm },
  { key: "mint", label: "Mint Item", component: MintItemForm },
  { key: "metadata", label: "Set Metadata", component: SetMetadataForm },
  { key: "attribute", label: "Set Attribute", component: SetAttributeForm },
]

export const NFTForms = (props: CommonComponentProps) => {
  const [activeTab, setActiveTab] = useState("create")
  const ActiveComponent = tabs.find((tab) => tab.key === activeTab)?.component

  return (
    <div className="mt-8 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === tab.key
                ? "text-blue-600 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6">{ActiveComponent && <ActiveComponent {...props} />}</div>
    </div>
  )
}
