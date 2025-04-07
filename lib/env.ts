export const getEnv = () => {
    // Example usage if you have some AI_KEY or DB_URL
    const AI_API_KEY = process.env.AI_API_KEY || "";
    // Validate or fallback
    if (!AI_API_KEY) {
        console.warn("No AI_API_KEY found in env - using fallback mode.");
    }
    return { AI_API_KEY };
};
