import { getRestaurant } from "@/lib/data-access"
import NewEntryForm from "@/components/new-entry-form"

export default async function NewEntryPage() {
  const restaurant = await getRestaurant()
  
  return (
    <NewEntryForm 
      categories={restaurant.categories} 
      locations={restaurant.locations} 
    />
  )
}
