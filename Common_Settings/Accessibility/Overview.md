{:index 1}

# AnyChart Accessibility

## Overview

The Web unites millions of people all over the world. Some web users are partially disabled and cannot operate some electronic devices, e.g. mouses and keyboards. For visually impaired persons, the best option is to use a screen reader, which reads the page content and makes it understandable to them.

International accessibility standards were invented to make technology and the Internet available to all people, regardless of their disability status. AnyChart supports these standards to provide users with more opportunities.

There are several methods (??? или ways) in AnyChart that allow adding accessibility options. The main idea is to create special tags (ARIA tags) in the SVG structure of a chart or a map. These tags help screen readers to make the chart content readable and pronounce it correctly, so that disabled people could understand the information on charts and maps.

## Compliance

AnyChart Charts and Maps have been (??? не уверена, что ты хотел сказать,
но если это, то наверное лучше вообще were) checked for compliance with the following standards:

* [Section 508 Amendment to the Rehabilitation Act of 1973](Section_508)
* [EN 301 549 Accessibility requirements suitable for public procurement of ICT products and services in Europe](Standard_EN_301_549)
* [Web Content Accessibility Guidelines (WCAG) 2.0](Web_Content_Accessibility_Guidelines)

## Why a11y

Accessibility is often abbreviated as the numeronym **a11y**, where the number 11 refers to the number of letters omitted. This parallels the abbreviations of internationalization and [localization](../Localization) as i18n and l10n respectively and follows an Information and Communications Technology (ICT)-oriented convention, which is used widely in the software community.

## Settings

The accessibility support is enabled by default. It means that you do not need to enable accessibility unless you have turned it off. If the accessibility support is disabled, there are neither ARIA-tags nor ARIA-labels in the SVG structure, so the information available to a screen reader is barely understandable.

AnyChart offers a wide variety of options to confugure accessibility. Please see the [Accessibility Settings](Settings) article to learn more.