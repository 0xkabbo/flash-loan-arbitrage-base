# Flash Loan Arbitrage Base

This repository provides a professional-grade boilerplate for interacting with Aave V3 Flash Loans. It is designed for developers looking to build arbitrage bots or liquidation scripts that require massive instant liquidity.

### How it Works
1.  **Request:** The contract requests a specific amount of an asset from the Aave Pool.
2.  **Execute:** The `executeOperation` function is triggered, where you insert your custom arbitrage logic (e.g., swapping on Uniswap vs. Sushiswap).
3.  **Repay:** The contract automatically calculates the premium (0.05%) and ensures the loan is repaid in the same transaction.
4.  **Reversion:** If the trade isn't profitable enough to cover the loan + fee, the entire transaction reverts, ensuring you never lose the principal.

### Configuration
* **PoolAddressProvider:** Set this to the specific network address (Ethereum, Polygon, Arbitrum).
* **Asset:** The ERC-20 token address you wish to borrow.
