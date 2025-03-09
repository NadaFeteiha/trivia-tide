
const getTriviaQuestions = async ({ amount, category, difficulty, type }) => {
    try {
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
        const response = await fetch(url);

        if (response.status === 429) {
            throw new Error("Too many requests! Try again later.");
        }

        if (!response.ok) throw new Error("API request failed");

        const data = await response.json();

        return data.results ? data.results : [];
    } catch (error) {
        console.error("Error fetching trivia questions:", error);
        return [];
    }
};

export default getTriviaQuestions;