{:index 1}

# AnyChart Accessibility

## Overview

The Web unites millions of people all over the world. Some web users are part-disabled, they can't use some electronic devices, e.g. mouse, keyboards, etc. When a visually-impaired users use the Internet, the best option is to use a screen reader which reads the page content and makes it understandable to such persons.

International accessibility standards are invented to make technology and the Internet available to all users, regardless of disability status. Using these standards is a way to provide such people more opportunities. AnyChart supports these standards.

There are several methods AnyChart supports that make charts accessible. The main idea is in creating special tags (ARIA tags) in SVG structure of a chart or a map. These tags help screen readers to make the chart content readable and pronounce it correctly, it helps disabled people to understand the information on charts and maps.

## Compliance

AnyChart Charts and Maps have be checked for compliance with the following standards:

* [Section 508 Amendment to the Rehabilitation Act of 1973](Section_508)
* [EN 301 549 Accessibility requirements suitable for public procurement of ICT products and services in Europe](Standard_EN_301_549)
* [Web Content Accessibility Guidelines (WCAG) 2.0](Web_Content_Accessibility_Guidelines)

## Why a11y

Accessibility is often abbreviated as the numeronym **a11y**, where the number 11 refers to the number of letters omitted. This parallels the abbreviations of internationalization and [localization](../Localization) as i18n and l10n respectively and follows an Information and Communications Technology (ICT)-oriented convention, which is used widely in the software community.

## Settings

The accessibility support is enabled by default. It means that you don't need to enable accessibility unless you've turned it off. Switching the accessibility support off will lead to the absence of both ARIA-tags and ARIA-labels in the SVG structure, so the information available to a screen reader will be barely understandable.

AnyChart offer a wide variety of options to confugure accessibility, please see [Accessibility Settings](Settings) article to learn more.