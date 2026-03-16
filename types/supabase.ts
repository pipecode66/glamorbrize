export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number
          name: string
          slug: string
          description: string | null
          parent_id: number | null
          image_url: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          name: string
          slug: string
          description?: string | null
          parent_id?: number | null
          image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          name?: string
          slug?: string
          description?: string | null
          parent_id?: number | null
          image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      products: {
        Row: {
          id: number
          name: string
          slug: string
          description: string | null
          price: number
          compare_at_price: number | null
          cost_price: number | null
          sku: string | null
          barcode: string | null
          inventory_quantity: number
          category_id: number | null
          featured: boolean
          active: boolean
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          name: string
          slug: string
          description?: string | null
          price: number
          compare_at_price?: number | null
          cost_price?: number | null
          sku?: string | null
          barcode?: string | null
          inventory_quantity?: number
          category_id?: number | null
          featured?: boolean
          active?: boolean
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          name?: string
          slug?: string
          description?: string | null
          price?: number
          compare_at_price?: number | null
          cost_price?: number | null
          sku?: string | null
          barcode?: string | null
          inventory_quantity?: number
          category_id?: number | null
          featured?: boolean
          active?: boolean
          created_at?: string | null
          updated_at?: string | null
        }
      }
      // Añadir más tablas según sea necesario
    }
  }
}
