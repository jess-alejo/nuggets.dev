import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="color-theme"
export default class extends Controller {
  static targets = ["themeToggleDarkIcon", "themeToggleLightIcon"]

  connect() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (this.isDarkMode()) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    this.updateThemeIcon()
  }

  toggle() {
    if (this.isDarkMode()) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("color-theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("color-theme", "dark")
    }

    this.updateThemeIcon()
  }

  isDarkMode() {
    return (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  }

  updateThemeIcon() {
    if (this.isDarkMode()) {
      this.themeToggleDarkIconTarget.classList.add("hidden")
      this.themeToggleLightIconTarget.classList.remove("hidden")
    } else {
      this.themeToggleDarkIconTarget.classList.remove("hidden")
      this.themeToggleLightIconTarget.classList.add("hidden")
    }
  }
}
