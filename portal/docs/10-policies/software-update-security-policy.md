---
title: Software Update Security Policy
status: approved
owner: CTO
classification: Internal
version: 1.0
effective_date: 2025-08-13
next_review: 2026-08-13
controls:
  - iso24089:5.1
  - iso24089:6.2
---

## Purpose
Define requirements for secure planning, development, and deployment of over‑the‑air software updates.

## Scope
Applies to all software update mechanisms for vehicle systems and connected devices.

## Policy
1. All updates must be cryptographically signed and verified before installation.
2. Update processes must include integrity and authenticity checks.
3. Rollback mechanisms must be implemented to address failed updates.

## Roles & Responsibilities
- CTO — ensures strategic oversight of update security.
- Development Teams — implement secure update mechanisms.
- Release Management — coordinates update deployment and validation.

## Exceptions
Exceptions to update security requirements must be documented and approved by the CTO.

## Compliance & Enforcement
Regular testing of update processes and periodic audits will verify compliance.

## References
- ISO 24089:2023 Sections 5 and 6
- Related procedures and evidence register