<!-- markdownlint-disable MD033 MD046 -->

# :fontawesome-solid-flask-vial: Introduction

## Milestone

!!! quote ":octicons-milestone-16: Milestone"

    Our goal is to create a **Tetris Game** to delight our site visitors.

    <figure markdown>
        ![Tetris Game](../assets/img/tetris-game.png){ loading=lazy }
        <figcaption>Outcome: Tetris Game</figcaption>
    </figure>

## High Level Continuous Deployment Architecture

```{ .mermaid }

sequenceDiagram
    actor D as Developer
    actor R as Reviewers

    participant GBF as Git Branch (Feature) & PR
    participant GMQ as GitHub Merge Queue
    participant GBM as Git Branch (Main)
    
    participant GT as Git Tag
    participant DR as GitHub Docker Registry
    participant GR as GitHub Release
    participant ST as Staging
    participant PRD as Production

    D->>GBF: Pushes & opens
    activate GBF
    GBF->>GBF: Continuous Integration
    deactivate GBF

    GBF--)+R: Notify changes
    R->>-GBF: Approves
    GBF--)GMQ: Creates/Updates

    activate GMQ
    GMQ->>GMQ: Continuous Integration
    deactivate GMQ

    GMQ->>GBM: Merges
    activate GBM
    GBM->>GBM: Versioning
    GBM->>GT: Creates
    deactivate GBM


    activate GT
    GT->>GT: Continuous Delivery
    GT--xDR: Pushes
    deactivate GT

    D->>GR: Creates a Pre-Release
    activate GR
    GR->>GR: Continuous Deployment (Staging)
    GR--xST: Deploys
    deactivate GR

    D->>GR: Creates a Release
    activate GR
    GR->>GR: Continuous Deployment (Production)
    GR--xPRD: Deploys
    deactivate GR
```

### 