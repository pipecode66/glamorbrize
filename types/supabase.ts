export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

type TableDefinition<
  Row extends Record<string, any>,
  Insert extends Record<string, any> = Partial<Row>,
  Update extends Record<string, any> = Partial<Insert>,
> = {
  Row: Row
  Insert: Insert
  Relationships: []
  Update: Update
}

type LooseRow = Record<string, any> & { id: number }

export interface Database {
  public: {
    CompositeTypes: Record<string, never>
    Enums: Record<string, never>
    Functions: Record<string, never>
    Tables: {
      categories: TableDefinition<
        {
          id: number
          name: string
          slug: string
          description: string | null
          parent_id: number | null
          image_url: string | null
          created_at: string | null
          updated_at: string | null
        },
        {
          id?: number
          name: string
          slug: string
          description?: string | null
          parent_id?: number | null
          image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      >
      favorites: TableDefinition<
        {
          id: number
          user_id: string
          product_id: number
          created_at: string | null
        },
        {
          id?: number
          user_id: string
          product_id: number
          created_at?: string | null
        }
      >
      orders: TableDefinition<
        LooseRow & {
          status: string | null
        }
      >
      product_images: TableDefinition<
        {
          id: number
          product_id: number
          url: string
          alt_text: string | null
          position: number | null
          created_at: string | null
        },
        {
          id?: number
          product_id: number
          url: string
          alt_text?: string | null
          position?: number | null
          created_at?: string | null
        }
      >
      product_variants: TableDefinition<
        LooseRow & {
          product_id: number
          size: string | null
          color: string | null
          price: number | null
          inventory_quantity: number | null
          sku: string | null
          created_at: string | null
        }
      >
      products: TableDefinition<
        {
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
        },
        {
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
      >
      profiles: TableDefinition<
        {
          id: string
          first_name: string | null
          last_name: string | null
          email: string | null
          phone: string | null
          address: string | null
          city: string | null
          state: string | null
          postal_code: string | null
          role: string | null
          created_at: string | null
          updated_at: string | null
        },
        {
          id: string
          first_name?: string | null
          last_name?: string | null
          email?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          postal_code?: string | null
          role?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      >
      reviews: TableDefinition<
        {
          id: number
          product_id: number
          user_id: string
          rating: number
          title: string | null
          content: string | null
          approved: boolean
          created_at: string | null
          updated_at: string | null
        },
        {
          id?: number
          product_id: number
          user_id: string
          rating: number
          title?: string | null
          content?: string | null
          approved?: boolean
          created_at?: string | null
          updated_at?: string | null
        }
      >
    }
    Views: Record<string, never>
  }
}
