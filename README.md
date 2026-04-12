# Squidex [![Version](https://img.shields.io/badge/version-latest-344675)](https://github.com/stackblaze-templates/squidex) [![Maintained by StackBlaze](https://img.shields.io/badge/maintained%20by-StackBlaze-blue)](https://stackblaze.com) [![Weekly Updates](https://img.shields.io/badge/updates-weekly-green)](https://github.com/stackblaze-templates/squidex/actions) [![Deploy on StackBlaze](https://img.shields.io/badge/Deploy%20on-StackBlaze-orange)](https://stackblaze.com)

<p align="center"><img src="logo.png" alt="squidex" width="120"></p>

A .NET headless CMS with event sourcing, CQRS, and a rich content modeling system. Provides GraphQL and REST APIs with real-time updates.

> **Credits**: Built on [Squidex](https://squidex.io) by [Sebastian Stehle](https://github.com/Squidex). All trademarks belong to their respective owners.

## Deploy on StackBlaze

[![Deploy on StackBlaze](https://img.shields.io/badge/Deploy%20on-StackBlaze-orange)](https://stackblaze.com)

This template includes a `stackblaze.yaml` for one-click deployment on [StackBlaze](https://stackblaze.com). Both options run on **Kubernetes** for reliability and scalability.

<details>
<summary><strong>Standard Deployment</strong> — Single-instance Kubernetes setup for startups and moderate traffic</summary>

<br/>

```mermaid
flowchart LR
    U["Customers"] -->|HTTPS| LB["Edge Network\n+ SSL"]
    LB --> B["Squidex\n.NET"]
    B --> DB[("MongoDB\nManaged DB")]

    style LB fill:#ff9800,stroke:#e65100,color:#fff
    style B fill:#0041ff,stroke:#002db3,color:#fff
    style DB fill:#4caf50,stroke:#2e7d32,color:#fff
```

**What you get:**
- Single Squidex instance on Kubernetes
- Managed MongoDB database
- Automatic SSL/TLS via StackBlaze edge network
- Automated daily backups
- Zero-downtime deploys

**Best for:** Development, staging, and moderate-traffic production environments.

</details>

<details>
<summary><strong>High Availability Deployment</strong> — Multi-instance Kubernetes setup for business-critical production</summary>

<br/>

```mermaid
flowchart LR
    U["Customers"] -->|HTTPS| CDN["CDN\nStatic Assets"]
    CDN --> LB["Load Balancer\nAuto-scaling"]
    LB --> B1["Squidex #1"]
    LB --> B2["Squidex #2"]
    LB --> B3["Squidex #N"]
    B1 --> R[("Redis\nSessions + Cache")]
    B2 --> R
    B3 --> R
    B1 --> DBP[("MongoDB Primary\nRead + Write")]
    B2 --> DBP
    B3 --> DBR[("MongoDB Replica\nRead-only")]
    DBP -.->|Replication| DBR
    B1 --> Q["Queue Worker\nBackground Jobs"]
    Q --> R
    Q --> DBP

    style CDN fill:#607d8b,stroke:#37474f,color:#fff
    style LB fill:#ff9800,stroke:#e65100,color:#fff
    style B1 fill:#0041ff,stroke:#002db3,color:#fff
    style B2 fill:#0041ff,stroke:#002db3,color:#fff
    style B3 fill:#0041ff,stroke:#002db3,color:#fff
    style R fill:#f44336,stroke:#c62828,color:#fff
    style DBP fill:#4caf50,stroke:#2e7d32,color:#fff
    style DBR fill:#66bb6a,stroke:#388e3c,color:#fff
    style Q fill:#9c27b0,stroke:#6a1b9a,color:#fff
```

**What you get:**
- Auto-scaling Squidex pods on Kubernetes behind a load balancer
- Redis for shared sessions, cache, and queue management
- MongoDB primary + read replica for high throughput
- CDN for static assets (images, CSS, JS)
- Background queue workers for async processing
- Automated failover and self-healing
- Zero-downtime rolling deploys

**Best for:** Production workloads, high-traffic applications, business-critical deployments.

</details>

## Local Development

    docker compose up

Visit http://localhost:5000. Login: admin@example.com / password.

---

### Maintained by [StackBlaze](https://stackblaze.com)

Weekly automated checks for up-to-date dependencies, security scanning, and best practices.
