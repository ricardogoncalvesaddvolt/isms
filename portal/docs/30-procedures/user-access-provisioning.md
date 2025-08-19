---
title: User Access Provisioning
status: approved
owner: IT SecOps
version: 1.0
effective_date: 2025-08-13
next_review: 2026-08-13
controls:
  - iso27001:A.9.1
records:
  - EV-101
tools:
  - Identity Management System
sla:
  - "Provisioning Completion: 24 hours"
---

## Purpose
Define the process to provision and manage user access requests in a consistent and auditable manner.

## Triggers
- New user access request submitted via request portal.

## Inputs
- User access request form
- Approved access control documents

## Steps
1. Validate request details and required approvals.
2. Create user account in Identity Management System.
3. Assign roles and permissions based on least privilege.
4. Notify user of account creation and initial credentials.

## Outputs / Records
- Confirmation of account creation stored in access logs.

## KPIs / SLAs
- Complete provisioning within 24 hours of request approval.

## Related
- Access Control Policy