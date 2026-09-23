# QualityGate - Playwright Automation Framework

A Playwright + TypeScript end-to-end test automation framework for testing the SauceDemo web application.

## 🚀 Project Overview

This project automates key user workflows of the SauceDemo application using Playwright and TypeScript.

The framework follows the **Page Object Model (POM)** design pattern to keep page locators, page actions, and test scenarios organized and maintainable.

It also includes:

- Test data management
- Reusable page objects
- Playwright assertions
- Failure screenshots
- Trace collection on retry
- HTML test reports
- GitHub Actions CI/CD integration

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Automation:** Playwright
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Package Manager:** npm
- **CI/CD:** GitHub Actions
- **Application:** SauceDemo
- **Browser:** Chromium

## 📁 Project Structure

```text
QualityGate/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│   └── testData.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md