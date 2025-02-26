const onboardingSteps = [
    {
        title: "Welcome to ALT Shortcuts!",
        text: "This extension lets you navigate Chrome faster with keyboard shortcuts. Let’s take a quick tour!",
        highlight: null,
    },
    {
        title: "Focus Search",
        text: "Press ALT + S (or your custom key) to jump to the search input on supported sites.",
        highlight: "focus_search",
    },
    {
        title: "Customize Your Shortcuts",
        text: "Click 'Configure Shortcuts' below to set your preferred key combinations.",
        highlight: "configure-shortcuts",
    },
    {
        title: "Ready to Go!",
        text: "Explore all shortcuts and customize them to your liking. Enjoy faster browsing!",
        highlight: null,
    },
];

document.addEventListener("DOMContentLoaded", async () => {
    const hasCompletedOnboarding = await getFromStorage(
        "hasCompletedOnboarding"
    );
    if (!hasCompletedOnboarding) {
        startOnboarding();
    } else {
        showMainContent();
    }

    document
        .getElementById("configure-shortcuts")
        .addEventListener("click", () => {
            chrome.tabs.create({
                url: "chrome://extensions/shortcuts",
            });
        });
});

let currentStep = 0;

async function startOnboarding() {
    document.getElementById("onboarding").style.display = "flex";
    displayStep(currentStep);

    document.getElementById("step-content").addEventListener("click", (e) => {
        if (e.target.id === "next-step") {
            currentStep++;
            if (currentStep < onboardingSteps.length) {
                displayStep(currentStep);
            } else {
                finishOnboarding();
            }
        } else if (e.target.id === "skip-tour") {
            finishOnboarding();
        }
    });
}

function displayStep(stepIndex) {
    const step = onboardingSteps[stepIndex];
    const stepContent = document.getElementById("step-content");
    stepContent.innerHTML = `
    <h2>${step.title}</h2>
    <p>${step.text}</p>
    <div class="onboarding-buttons">
        ${
            stepIndex < onboardingSteps.length - 1
                ? '<button id="next-step">Next</button>'
                : '<button id="next-step">Finish</button>'
        }
        <button id="skip-tour">Skip</button>
    </div>
`;

    document
        .querySelectorAll(".shortcut-item, #configure-shortcuts")
        .forEach((el) => el.classList.remove("highlight"));
    if (step.highlight) {
        const target =
            document.querySelector(`[data-command="${step.highlight}"]`) ||
            document.getElementById(step.highlight);
        if (target) target.classList.add("highlight");
    }
}

async function finishOnboarding() {
    await setToStorage("hasCompletedOnboarding", true);
    document.getElementById("onboarding").style.display = "none";
    showMainContent();
}

async function showMainContent() {
    document.getElementById("main-content").style.display = "block";
    const commands = await chrome.commands.getAll();
    console.log("Commands retrieved:", commands);
    commands.forEach((command) => {
        const keyElement = document.querySelector(
            `.shortcut-key[data-command="${command.name}"]`
        );
        console.log(keyElement);
        if (keyElement) keyElement.textContent = command.shortcut || "Not set";
    });
}

function getFromStorage(key) {
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (result) => resolve(result[key]));
    });
}

function setToStorage(key, value) {
    return new Promise((resolve) => {
        chrome.storage.local.set({ [key]: value }, resolve);
    });
}
