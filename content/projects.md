# Projects

## Vineet's AI assistant

Vineet's AI assistant is Vineet's personal AI chatbot built into his portfolio website.

Visitors can ask questions about Vineet and interact with an AI representation of his professional background, projects, experiences, and personality.

## Why Vineet built Vineet's AI assistant

Vineet believes a portfolio should not only tell someone about him. It should allow people to interact with his background and understand who he is.

Coffee chats and networking conversations are valuable, but people do not always have enough time to understand another person's personality, background, interests, and work.

Vineet's AI assistant is an attempt to create an interactive way for people to learn about Vineet.

## Technology and architecture

Vineet's AI assistant uses a retrieval augmented generation architecture with Pinecone as the vector database.

The knowledge is organized into a knowledge base rather than being limited to a single hardcoded file.

The website is the interface and the vector database acts as the knowledge layer.

As Vineet updates the knowledge base, the chatbot can retrieve updated information when answering questions.

The longer term vision is to include both professional information and aspects of Vineet's personality and way of thinking.

## Product philosophy behind Vineet's AI assistant

The project reflects Vineet's belief that technology should solve a real communication problem.

Instead of presenting a static resume, Vineet's AI assistant creates an interactive experience where someone can ask questions and explore Vineet's background.

## Rice Alumni Finder

Rice Alumni Finder is a networking tool Vineet is building as a Rice MBA student. It is in the lab: it runs on his computer and is not public yet.

A student says who they want to reach (a company, a job title such as Product Manager, and a location such as Houston) and adds a little about their own background. The tool searches public web results, finds people who currently match all three, and shows Rice alumni first.

It checks company, job title and location separately and labels each one as matched, not matched, or not verifiable, so people who can't be confirmed are shown separately instead of being presented as matches. Job titles are graded as exact, an accepted equivalent, or an adjacent title. Shared background, such as the same university or a previous employer, only changes the ranking, and every match shows the words in the search result that support it.

For each match it drafts a short LinkedIn connection note that mentions what the two people have in common. Users can rate each result and each search, and that feedback is stored so the matching can be improved later.

It is built with a Python (FastAPI) backend, a React frontend, the Brave Search API and Supabase. It uses rules rather than an AI model to decide who matches, and it never opens LinkedIn pages.

## Current and upcoming projects

Vineet is also building or planning several other products:

Task Manager

Alumni Finder

Job Hunter

These projects are intended to solve practical problems rather than exist simply as demonstrations of AI technology.

Rice Alumni Finder is described above. Details about the other projects should be added only after Vineet provides the actual product requirements, implementation details, and outcomes.
