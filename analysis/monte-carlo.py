
import json
import random
from collections import Counter

import matplotlib.pyplot as plt

TRAITS = ["H", "S", "L", "P", "R", "A", "E", "W", "D"]

# Number of simulated test attempts
SIMULATIONS = 100_000

# Load questions
with open("questions.json", "r") as f:
    questions = json.load(f)

# Create a dictionary for quick question lookup
question_map = {q["id"]: q for q in questions}

# Change this to the ID of your first question
START_QUESTION = "q1"


def simulate_test():
    scores = {trait: 0 for trait in TRAITS}

    current_question = START_QUESTION

    while current_question is not None:

        question = question_map[current_question]

        # Randomly select an answer
        answer = random.choice(question["answers"])

        # Apply score changes
        for trait in TRAITS:
            scores[trait] += answer["score"].get(trait, 0)

        # Follow the selected answer's follow-up, if present
        current_question = answer.get("followup")

    return scores


def determine_type(scores):
    groups = [
        ["H", "S", "L"],
        ["P", "R", "A"],
        ["E", "W", "D"]
    ]

    result = ""

    for group in groups:
        # Highest percentage wins
        winner = max(group, key=lambda t: scores[t])
        result += winner

    return result


# Run simulations
type_counts = Counter()
group_counts = [
    Counter(),
    Counter(),
    Counter()
]

for _ in range(SIMULATIONS):

    scores = simulate_test()

    personality_type = determine_type(scores)
    type_counts[personality_type] += 1

    groups = [
        ["H", "S", "L"],
        ["P", "R", "A"],
        ["E", "W", "D"]
    ]

    for i, group in enumerate(groups):
        winner = max(group, key=lambda t: scores[t])
        group_counts[i][winner] += 1


# Convert counts to percentages
type_percentages = {
    t: count / SIMULATIONS * 100
    for t, count in type_counts.items()
}

group_percentages = [
    {
        trait: counts[trait] / SIMULATIONS * 100
        for trait in group
    }
    for counts, group in zip(
        group_counts,
        [["H", "S", "L"], ["P", "R", "A"], ["E", "W", "D"]]
    )
]


# Print type distribution
print("\nPERSONALITY TYPE DISTRIBUTION")

for t, percentage in sorted(
    type_percentages.items(),
    key=lambda x: x[1],
    reverse=True
):
    print(f"{t}: {percentage:.2f}%")


# Plot personality type distribution
plt.figure(figsize=(15, 6))

types = [f"{a}{b}{c}" for a in "HSL"
         for b in "PRA" for c in "EWD"]

values = [type_percentages.get(t, 0) for t in types]

plt.bar(types, values)
plt.title("Personality Type Distribution")
plt.xlabel("Personality Type")
plt.ylabel("Probability (%)")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()


# Plot the three individual group distributions
group_names = ["First Trait", "Second Trait", "Third Trait"]

for i, group in enumerate(group_percentages):

    plt.figure(figsize=(6, 4))

    plt.bar(group.keys(), group.values())

    plt.title(f"{group_names[i]} Distribution")
    plt.xlabel("Trait")
    plt.ylabel("Probability (%)")

    plt.tight_layout()
    plt.show()
