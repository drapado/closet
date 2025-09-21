import { ClothingItem } from "../types/ClothingItem";
import { categories } from "../data/categories";
import { colors as colorOptions, seasons, occasions } from "../data/options";

// Simple local categorization that returns default values
// Users will need to manually adjust categories as needed
export const categorizeClothing = async (imageUri: string): Promise<Partial<ClothingItem>> => {
  try {
    console.debug("[Categorization Service] Using local categorization for:", imageUri);
    
    // Return default values that users can manually adjust
    return {
      category: "Tops", // Default to most common category
      subcategory: "T-Shirts", // Default to most common subcategory
      color: ["Gray"], // Default neutral color
      season: ["Spring/Fall"], // Default versatile season
      occasion: ["Casual"], // Default occasion
    };
  } catch (error) {
    console.error("Error in local categorization:", error);
    throw error;
  }
};
