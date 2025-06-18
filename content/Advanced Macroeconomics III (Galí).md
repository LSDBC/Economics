
> [!abstract] Preface by **Lorenzo Bianchi Chignoli**
> These lecture notes were originally prepared for the Advanced Macroeconomics III course offered by Jordi Galí in the PhD in Economics program at Universitat Pompeu Fabra during the Spring 2025 term. The content is primarily derived from my personal notes from Jordi Galí's lectures, complemented by key excerpts from his textbook *Monetary Policy, Inflation, and the Business Cycle* (Galí, 2015, 2nd ed.). Many of the mathematical derivations were worked out as exercises and, therefore, may contain inaccuracies. I would like to extend my special thanks to Vincent D'Anzi for his feedback and for identifying several typos. Responsibility for all remaining errors is entirely my own.


## Classical Monetary Model

This section introduces a model of money in the classical economy. Most of the attending results are dramatically at odds with empirical evidence. However, this model serves as a smooth introduction to monetary economics, and to some of the notation that will be carried over hereafter. Some of the assumptions of the classical model are, indeed, quite heroic. The main assumptions are mentioned below:
- **Perfect competition**. To begin with, perfect competition is assumed both in the final good(s) and labor markets. Perfect competition implies that all agents are price takers in all markets, and (rightfully) believe they can sell as many goods as they are demanded at the given wage or price.
- **Market clearing**. Prices and wages adjust continuously to allow for market clearing (although the mechanism for such adjustment, remains, as usual, entirely unexplained).
- **Homogeneous representative agent**. Heterogeneity is ignored and a representative household is considered for simplicity.
- **Money in the utility function**. In this model, money enters the utility function directly. There are several ways to model money demand. In the baseline model, the convenient approach is simply to assume that money holdings provide some services, reflected in the utility function: money figures in the utility function directly, as a transactions facilitator. This means that no utility is derived from "being rich", although some recent expansions of the model have included such specifications (the so called "rough utility function"). Put simply, its role may be justified theoretically as a sort of "lubricant" for transactions. However, in the continuation of the chapter, some alternative approaches to include money in the household problem will be explored.
- **Labor economy**. For simplicity, the entire course assumes no capital accumulation and no investment (labor is the only input).
- **Closed economy**.

### Optimality

This section considers a representative household with a general (neoclassical) utility function and derives the optimality conditions in the most generic case. Later on, a specific form for this functions will be introduced — namely, the CRRA utility function.
As for money demand, 

Consider the utility objective function $\mathbb{E}_0 \sum_{t=0}^\infty \beta^t U(C_t, N_t, L_t; Z_t)$, where $N_t$ indicates hours of work (or number of workers per household). $L_t$ denote the **real balances**, that is to say the real value of moneyholdings: $L_t \equiv \frac{M_t}{P_t}$. As usual, $\beta= e^{-\rho}$, and $Z_t$ is a preference shock. Utility is neoclassical, and the budget constraint is: 

$$
P_t C_t + Q_t B_t + M_t \leq B_{t-1} + M_{t-1} + W_t N_t + P_t D_t - P_t T_t
$$

where $Q_t$ is the return of a one-period riskless bond $B_t$ with yield defined as $Q_t \equiv e^{-i_t}$ for some nominal interest rate $i_t$. In this economy, households own equity of the firms, and dividends $D_t$ denote real dividends (whenever a quantity is premultiplied by prices, is to obtain nominal balance). Note that households are homogeneous, and therefore shares owned per household can be ignored.
To prevent households to borrow indefinitely, that is issuing infinite $\lim_{ T \to \infty } Q_T = -\infty$ instead of buying bonds and repaying the debt with new issuance (Ponzi scheme), impose the solvency constraint:

$$
\lim_{T \to \infty} \mathbb{E}_t \{ \Lambda_{t,t+T} ,\mathcal{A}_{t+T} \} \geq 0
$$

where $\mathcal{A}_t \equiv \frac{B_{t-1} + M_{t-1} }{P_t}$ is total financial wealth, while $\Lambda_{t,t+T} \equiv \beta^T \frac{U_{c,t+T}}{U_{c,t}}$ is the stochastic discount factor. This is the minimal assumption to prevent Ponzi schemes. Since $\Lambda_{t,t+T}$ will be decreasing as $T$ increases, it implies that household debt cannot increase at a higher rate than the interest rate. Trade in equity could be theoretically included, but households are homogeneous and therefore no trade occurs in equilibrium.

There are three optimality conditions:

$$
\begin{cases} - \frac{U_{n,t}}{U_{c,t}} = \frac{W_t}{P_t}
\\
Q_t = \beta \mathbb{E}_t \left\{ \frac{U_{c,t+1}}{U_{c,t}} \frac{P_t}{ P_{t+1} } \right\}
\\
\frac{ U_{m,t} }{ U_{c,t} } = 1- Q_t = 1-e^{-i_t}
\end{cases}
$$

For the derivation, assume the household follows an optimal plan and consider deviations for such plan. Provided that the plan was optimal in the first place, deviations must necessarily decrease utility. This method is usually referred to as the **variational approach** and can be very handy in solving optimality conditions along multiple variables.
First, consider deviations in consumption and labor, that is satisfying the relationship $P_t dC_t = W_t dN_t$:

$$
\begin{align*} U_{c,t}dC_t + U_{n,t}dN_t &= 0
\\
\left[ U_{c,t} \frac{W_t}{P_t} + U_{n,t} \right] dN_t &= 0 \\
U_{c,t} \frac{W_t}{P_t} + U_{n,t} &= 0
\end{align*}
$$

The second equality follows from the fact that $P_t dC_t = W_t dN_t$: since no changes occur in the equity market, all additional income has to be spent in consumption. Moreover, perfect competition in the labor market implies that the household believes to possibly supply as much labor as they like. Thus, the terms in brackets must be 0: for negative or positive values some improvement would be possible by changing labor or consumption, violating the assumption that the household is on the optimal path — a contradiction. As a consequence, the marginal rate of substitution between consumption an labor must be equal to the wage to price ratio.

Now consider diverting consumption today with consumption tomorrow. Consider both the cases where household employs money and bonds to increase their consumption.
If such deviations are performed using bonds, then it must be that $\underbrace{ P_{t+1} dC_{t+1} }_{dB_t} = -\frac{P_t}{Q_t}dC_t$. Rearranging, this is the same as $dC_{t} = -\frac{P_{t+1}}{P_{t}}Q_{t} dC_{t+1}$. Therefore, factorizing $dC_{t}$:

$$
\begin{align*}
U_{c,t} dC_t + \beta \mathbb{E}_t [U_{c,t+1} dC_{t+1}] &= 0
\\
\left[ U_{c,t} - \frac{1}{Q_t} \beta\mathbb{E} U_{c,t+1} \frac{P_t}{P_{t+1} } \right] dC_t &= 0 \\
U_{c,t} - \frac{1}{Q_t} \beta\mathbb{E} U_{c,t+1} \frac{P_t}{P_{t+1} } &= 0
\end{align*}
$$

Finally, consider such deviations using money, that is satisfying $\underbrace{ P_{t+1} dC_{t+1} }_{d M_t} = -P_t dC_t$. Rearranging, this is the same as $dC_{t} = - \frac{P_{t+1}}{P_{t}} dC_{t+1}$. Also recall that, by definition, $L_{t} = \frac{M_{t}}{P_{t}}$, and thus it must be that $dL_{t} = \frac{dM_{t}}{P_{t}}$. Plugging in these two results, note that:

$$
\begin{align*}
U_{c,t} dC_t + U_{l,t}dLt + \beta \mathbb{E} [U_{c,t+1} dC_{t+1}] & = 0
\\
U_{c,t} dC_t + U_{l,t} \frac{dM_{t}}{P_{t}} - \beta \mathbb{E} \left[ U_{c,t+1} \frac{P_{t}}{P_{t+1}} dC_{t} \right] & = 0
\\
U_{c,t} dC_t - U_{l,t} dC_{t} - \beta \mathbb{E} \left[ U_{c,t+1} \frac{P_{t}}{P_{t+1}} dC_{t} \right] & = 0
\\
\left( U_{c,t}  - U_{l,t} - \beta \mathbb{E} \left[ U_{c,t+1} \frac{P_{t}}{P_{t+1}}  \right] \right) dC_t & = 0
\\
U_{c,t}  - U_{l,t} - \beta \mathbb{E} \left[ U_{c,t+1} \frac{P_{t}}{P_{t+1}}  \right] &= 0 \\
U_{c,t} (1-Q_{t})  - U_{l,t} &= 0
\end{align*}
$$

where the last equality is obtained by exploiting the previous optimality condition: in fact, $\beta \mathbb{E} \left[ U_{c,t+1} \frac{P_{t}}{P_{t+1}}  \right] = - Q_{t} U_{c,t}$. This condition indicates the marginal utility of real balances must be equal to, approximately, $i_t$ (can be easily seen by doing a first-order Taylor expansion around 0). The interest rate can be interpreted as the "cost" of holding real balances, namely the opportunity cost of holding real balances in opposed to holding wealth in the form of bonds. Note that his equation only appears in models with money into the utility function.

Let us continue by specifying a structural form for households' utility. Assume that utility has a CRRA shape (note that, for the sake of simplicity, $C$ and $L$ have the same $\sigma$ parameter), and a constant Frisch elasticity of labor $\phi$. 

$$
U(C_{t},N_{t}) =
\begin{cases}
\left( \frac{C_{t}^{1-\sigma}-1}{1-\sigma} - \frac{N_{t}^{1+\phi}}{1+\phi} + \Xi_{t}^\sigma \frac{L_{t}^{1-\sigma}-1}{1-\sigma} \right) Z_{t} & \sigma\neq{1} \\
\left( \log(C_{t}) - \frac{N_{t}^{1+\phi}}{1+\phi} + \Xi_{t}^\sigma \log(L_{t}) \right) Z_{t} & \sigma={1}
\end{cases}
$$

The preference shock multiplies the entire function: in this formulation, we can interpret such shock as a *pure demand shock*. In some sense, it can be interpreted as equivalent to a shock to $\beta$. Other sources of shock can affect labor supply specifically (see $\Phi$ in the slides) or the money demand shock (in the slides, $\Xi$). Another important assumption is that the impact of real balances is **separable**. This not innocuous assumption means that the marginal utility of consumption and the marginal disutility of labor do not depend on real balances: $L_t \perp \frac{U_{n,t} }{ U_{c,t} }$.
By plugging in the specific derivatives of the functional form is the utility function leads to the implied optimality conditions:

$$
\begin{cases}
\frac{W_{t}}{P_{t}} &= C_{t}^\sigma N_{t}^\phi \\
Q_{t} &= \beta \mathbb{E}_{t} \left\{  \left(  \frac{C_{t+1}}{C_{t}}  \right)^{-\sigma} \left(  \frac{Z_{t+1}}{Z_{t}} \frac{P_{t}}{P_{t+1}}  \right)  \right\} \\
L_{t} &= C_{t}(1 - e^{-i_{t}})^{-\frac{1}{\sigma}}
\end{cases}
$$

Assume a steady state with constant inflation and no trend growth such as $Q \Pi = \beta$ which implies $i = \rho + \pi$. The corresponding log-linearized optimality conditions are:

$$
\begin{cases}
w_{t} - p_{t} &= \sigma c_{t} + \phi n_{t} \\
c_{t} &= \mathbb{E}_{t}[c_{t+1}] - \frac{1}{\sigma}( i_{t} - \mathbb{E}_{t} [\pi_{t+1}] - \rho) + \frac{1}{\sigma} (1 - \rho_{z}) z_{t} \\
l_{t} &= c_{t} - \frac{1}{\sigma} \log(1-e^{-i_{t}})  \\
&\approx c_{t} - \eta i_{t} + \zeta
\end{cases}
$$

where denotes the semielasticity of money demand. In the most general form, the money demand function is postulated as equal to $m_{t} - p_{t} = c_{t} - \eta i_{t}$, where $\eta \equiv \frac{ \partial (m_{t} - p_{t}) }{ \partial i_{t} }$ is the semi-elasticity of money demand. This form is also derived in the following exercise,  as the optimality condition for a utility function with direct utility from real balances.
Details on the derivation of the Euler equation as a first-order approximation are outlined after the following exercise.

> [!exercise]- Household Optimality through the Lagrangian
> Set up the intertemporal household maximization problem supposing CRRA utility with preferenze shocks $Z$, where $\log(Z_t) \equiv z_t = (1-\rho_{z})z_{t-1} + \epsilon_{t}$:
> 
> $$
> \max_{c, N} \left(  \frac{C^{1-\sigma}}{1-\sigma} - \frac{N^{ 1+\phi}}{1+\phi} \right) Z + \beta \left(  \frac{C^{1-\sigma}}{1-\sigma} - \frac{N^{1+\phi}}{1+\phi} \right) \mathbb{E}[Z']
> $$
> 
> subject to
> 
> $$
> \begin{cases}
> P_t C_t + Q_t B_t + M_t \leq B_{t-1} + M_{t-1} + W_t N_t + P_t D_t - P_t T_t \\
> \lim_{ T \to \infty } \mathbb{E} \left\{  \Lambda_{t,T} \frac{B_{T}}{P_{T}}  \right\}
> \end{cases}
> $$
> 
> This can be conveniently solved through a Lagrangian:
> 
> $$
> \begin{align*}
> \mathcal{L} &\equiv \left(  \tfrac{C^{1-\sigma}}{1-\sigma} - \tfrac{N^{1+\phi}}{1+\phi} \right) Z - \tfrac{\lambda}{P} ( PC + QB + M - B_{-} - M_{-} - WN - PD + PT ) \\ & + \beta \left[ \left(  \tfrac{(C')^{1-\sigma}}{1-\sigma} - \tfrac{(N')^{1+\phi}}{1+\phi} \right) Z' - \tfrac{\lambda'}{P'} ( P'C' + Q'B' + M' - B - M - W'N' - P'D' + P'T' ) \right]
>\end{align*}
> $$
> 
> where the expectation term was omitted for readibility. Note that the multipliers must be normalized by the price level. The FOCs are as follows:
> 
> $$
> \begin{align*}
> [C] &:& ZC^{-\sigma} - \lambda &= 0 \\
> [C'] &:& Z'(C')^{-\sigma} - \lambda' &= 0 \\
> [N] &:& -ZN^\phi + \lambda \frac{W}{P} &= 0 \\
> [B] &:& \frac{\lambda Q}{P} &= \beta\frac{\lambda'}{P'} \\
> [M] &:& \frac{\lambda}{P} &= \frac{\beta\lambda'}{P'}
> \end{align*}
> $$
> 
> Plugging $[C]$ into $[N]$ leads to the first optimality condition:
> 
> $$
> \frac{N^{\phi}}{C^{-\sigma}} = \frac{W}{P}
> $$
> 
> while the second optimality condition follows pluggin $[C]$ and $[C']$ into $[B]$:
> 
> $$
> \begin{align*}
> Q &= \beta \frac{\lambda'}{\lambda} \frac{P}{P'} \\
> &= \beta\frac{Z'}{Z} \left( \frac{C}{C'} \right)^\sigma \frac{P}{P'}
> \end{align*}
> $$
>
> Finally, we conclude  the exercise by considering a generalization with (separable) money demand in the utility function.
> 
> $$
> \begin{align*}
> \mathcal{L} &\equiv \left(  \tfrac{C^{1-\sigma}}{1-\sigma} - \tfrac{N^{1+\phi}}{1+\phi} + \tfrac{L^{1-\nu}}{1-\nu} \right) Z - \tfrac{\lambda}{P} ( PC + QB + M - B_{-} - M_{-} - WN - PD + PT ) +  \\
> & + \beta \left[ \left(  \tfrac{(C')^{1-\sigma}}{1-\sigma} - \tfrac{(N')^{1+\phi}}{1+\phi} + \tfrac{ (L')^{1-\nu}}{1-\nu} \right) Z' - \tfrac{\lambda'}{P'} ( P'C' + Q'B' + M' - B - M - W'N' - P'D' + P'T' ) \right]
> \\
> [M] &: \left(  \frac{M}{P} \right)^{-\nu} - \frac{\lambda}{P} + \frac{\beta \lambda'}{P'} =0
> \end{align*}
> $$
> 
> The money demand optimality condition is obtained plugging in $[C]$ and $[C']$ for the multipliers:
> 
> $$
> \begin{align*}
> L^{-\nu} &= C^{-\sigma} Z - \beta \frac{ (C')^{-\sigma} Z'}{P'}
> \\
> \frac{L^{-\nu}}{C^{-\sigma}Z} &= 1 - \beta \left( \frac{C'}{C} \right)^{-\sigma} \frac{Z}{Z'} \frac{P}{P'}
> \\
> \frac{L^{-\nu}}{C^{-\sigma}Z} &= 1 - Q \\
> &= 1 - e^{-i_{t}}
> \end{align*}
> $$
> 
> which corresponds to the formula present in the textbook, namely $U_{l,t} = U_{c,t}(1-e^{-i_{t}})$.
> 
> As proposed thereof, the first-order Taylor expansion $\log(1-e^{-i_{t}}) \sim \text{const.} + \frac{1}{e^{i_{t}} - 1}i_{t}$ can be used to approximate the log-linear form (up to an uninteresting constant) as $m_{t} - p_{t} = \frac{\sigma}{\nu} c_{t} - \eta i_{t}$, where $\eta\equiv \frac{1}{\nu ( e^{i_{t}} - 1)} \simeq \frac{1}{\nu i_{t}}$ is the implied interest semielasticity of money demand. This can be noticed by expanding the last term of:
> 
> $$
> m_{t} - p_{t} = \frac{\sigma}{\nu} c_{t} - \frac{1}{\nu} \log(1-e^{-i_{t}})
> $$
> 
> Take a first order expansion by noting the the first derivative of $\log(1-e^{-i_{t}} )$ is equal to $\frac {e^{-i_{t}}} {1 - e^{-i_{t}}} = \frac{1}{e^{i_{t}} - 1}$. Therefore, the first-order Taylor expansion of the loglinear equation around some $i$ yields:
> 
> $$
> \begin{align*}
> \log(1 - e^{-i_{t}}) &\approx \log(1 - e^{-i_{t}}) + \frac{1}{e^{i_{t}} - 1} (i_{t} - i) \\
> &= \Big[ \underbrace { \log(1 - e^{-i}) + \frac{i}{e^{i} - 1} }_{\text{constant}} \Big] + \frac{i_{t}}{e^{i} - 1}
> \end{align*}
> $$
> 
> This can plugged into the original equation:
> 
> $$
> m_{t} - p_{t} \approx \frac{\sigma}{\nu} c_{t} - \left(  \frac{1}{\nu(e^i - 1)} \right)i_{t} + \text{constant}
> $$
> 
> which identifies $\eta \equiv \frac{1}{\nu(e^i - 1)}$. Also note that, for small $i$, then $e^i - 1 \approx i$, so that $\eta \approx \frac{1}{\nu i}$.

To find the intertemporal Euler equation espressed in terms of the interest rate, take the optimality condition for $Q_t$ in logs:

$$
\begin{align*}
Q_{t} &= \mathbb{E}_{t} \left[ \beta\frac{Z'}{Z} \left( \frac{C}{C'} \right)^\sigma \frac{P}{P'} \right]
\\
1 &= \frac{ \mathbb{E}_{t} \left[  \beta\frac{Z'}{Z} \left( \frac{C}{C'} \right)^\sigma \frac{P} {P'} \right] } { Q_{t} }
\\
0 &= \log \left( \mathbb{E}_{t} \left[  \beta\frac{Z'}{Z} \left( \frac{C}{C'} \right)^\sigma \frac{P} {P'} \right] \right) + i_{t}
\\
0 &\approx i_{t} - \rho + \mathbb{E}_{t} [ \Delta z_{t+1} ] - \sigma \mathbb{E}_{t} [ \Delta c_{t+1} ] - \mathbb{E}_{t} [ \pi_{t+1} ]
\\
\sigma \mathbb{E}_t[\Delta c_{t+1}] &\approx i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[\Delta z_{t+1}] \\
\mathbb{E}_t[\Delta c_{t+1}] &\approx \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[\Delta z_{t+1}]) \\
\mathbb{E}_t[c_{t+1} - c_t] &\approx \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[z_{t+1} - x_t]) \\
\mathbb{E}_t[c_{t+1}] - c_t &\approx \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[z_{t+1}] - x_t) \\
c_t &\approx \mathbb{E}_t[c_{t+1}] - \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[ x_{t+1} ] - z_t) \\
c_t &\approx \mathbb{E}_t[c_{t+1}] - \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho - (1-\rho_z) z_t)
\end{align*}
$$

^4f3277

where the fourth line introduces a first-order approximation (by Jensen's inequality), as the logarithm is moved within the expectation.

> [!focus]- Certainty-Equivalent First-Order Approximation
> This Focus details why the common approximation $\mathbb{E}[f(X)] \approx f(\mathbb{E}[X])$ is a **first-order Taylor approximation**. We analyze the relationship by performing a Taylor expansion of the function $f(X)$ around the mean of $X$, denoted as $\mu = \mathbb{E}[X]$. The variance is $\sigma^2 = \mathbb{E}[(X-\mu)^2]$. The term $f(\mathbb{E}[X])$ is exactly $f(\mu)$.
> The term $\mathbb{E}[f(X)]$ is analyzed by expanding $f(X)$ *inside* the expectation:
> 
> $$
> \begin{align*}
> f(X) &\approx f(\mu) + f'(\mu)(X-\mu) + \frac{1}{2}f''(\mu)(X-\mu)^2
> \\
> \mathbb{E}[f(X)] &\approx \mathbb{E} \left[ f(\mu) + f'(\mu)(X-\mu) + \frac{1}{2}f''(\mu)(X-\mu)^2 \right]
> \\
> \mathbb{E}[f(X)] &\approx f(\mu) + f'(\mu)\mathbb{E}[X-\mu] + \frac{1}{2}f''(\mu)\mathbb{E}[(X-\mu)^2]
> \\
> \mathbb{E}[f(X)] &\approx f(\mu) + \frac{1}{2}f''(\mu)\sigma^2
> \end{align*}
> $$
> 
> A **first-order** (or *certainty equivalent*) approximation deliberately ignores all second-order and higher terms. By truncating the expansion after the first-order term, the variance term disappears:
> 
> $$
> \mathbb{E}[f(X)] \approx f(\mu) + f'(\mu)\underbrace{\mathbb{E}[X-\mu]}_{=0} = f(\mu)
> $$
> 
> This leads to the final result:
> 
> > [!proposition] Certainty Equivalence First-Order Approximation
> >
> > At the first order, $f(\mathbb{E}[X])$ and $\mathbb{E}[f(X)]$ are approximately equal because we intentionally ignore the term that captures the effect of variance.
> > $$ f(\mathbb{E}[X]) = f(\mu) \approx \mathbb{E}[f(X)] $$
> 
> The ignored term, $\frac{1}{2}f''(\mu)\sigma^2$, is the "gap" explained by **Jensen's Inequality**. For a concave function like $\log$, $f''(X)<0$, which explains why $\mathbb{E}[\log(X)] \le \log(\mathbb{E}[X])$. Setting this term to zero is the mathematical basis of the approximation.

^6613ea

The effects of the two exogenous shocks on equilibrium values are different. On the one hand, $z_t$ only affects the real interest rate $r_t$. In contrast, technology has an ambiguous effect on employment depending on $\sigma$: if it is less than 1, increasing technology increases unemployment. In fact, for larger output, a low sigma entails a small increase in consumption, which does not offset the increase in labor demanded. This can be observed by taking the log-linear optimality condition of the firm, which solves profit maximization at the given technology:

$$
w_{t} - p_{t} = a_{t} - \alpha n_{t} + \log(1-\alpha)
$$

(the identity of total outpu on the RHS and real demand on the LHS holds by market clearing). This highlights how prices depend on marginal costs: $p_{t} = \psi_{t} \equiv w_{t} - [ a_{t} - \alpha n_{t} + \log(1-\alpha)]$.

> [!focus]- Real and Nominal Interest Rates
> A clarification on real and nominal rates. Recall that:
> - $\beta := e^\rho$
> - $Q_t = e^{-i_t}$
> Put simply, a bond with price $Q$ which yields 1 has a return $\frac{1}{Q}$. Moreover, define:
> - $\Pi_t := \frac{P_{t+1} -P_t}{P_t}$ as the gross rate of inflation
> - $R = \frac{1}{\beta}$ as the real neutral interest rate
> Since $Q$ is pinned down by $i$, the real interest rate should be equal to the returns on bonds net of inflation: $R = \frac{\frac{1}{Q}}{\Pi}$. Taking the logs, $r = -\log{Q} - \pi$, which is also equal to the familiar $r = i - \pi$.
> 
> As a possible interpretation of this relation, note that pure consumption smoothing can be achieved only if the real interest rate equalizes the discount rate. Deviations depend on the value of the real interest rate. How this is realized in practice is beyond the scope of this section: in the future, central banks may allow individuals to hold deposits directly through #CBDC, and presumably earn interests on liquidity. A more detailed treatment of #CBDC and #crypto is contained in Benigno (2025).


> [!focus]- Government Budget Constraint
> Note that, if a public sector were to be introduced, this model should also satisfy the government budget constraint:
> 
> $$
> P_{t} G_{t} + B_{t-1}^G = P_{t} T_{t} + Q_{t} B_{t}^G + \Delta M_{t}
> $$
> which implies a fiscal policy rule determining $\{ G_{t}, B_{t}^G, T_{t} \}$ and a monetary policy rule determining $\{ M_{t}, i_{t} \}$. The implicit assumption throughout this section is that $G_t=0$.

### Equilibrium

An equilibrium for the Classical model is a steady state clearing markets for goods, labor, and assets at the given technology[^1]:

$$
\begin{cases}
y_{t} &= c_{t} \\ \\
\sigma c_{t} + \phi n_{t} &= w_{t} - p_{t} \\
&= a_{t} - \alpha n_{t} + \log(1-\alpha) \\ \\
m_{t} - p_{t} &= l_{t} \\
&= c_{t} - \eta i_{t} \\ \\
y_{t} &= a_{t} + (1-\alpha) n_{t}
\end{cases}
$$
[^1]: Note that the money demand equation has been derived assuming that the elasticity of real balances demand follows the same parameter as the elasticity of consumption.

The previous conditions allow to solve endogenous variables for the exogenous variables and parameters:

$$
\begin{cases}
n_{t} = \frac{1- \sigma}{\sigma(1-\alpha) + \alpha + \phi} a_{t} + \frac{ \log(1-\alpha) }{\sigma(1-\alpha) + \alpha + \phi} \equiv \psi_{na} a_{t} + n
\\
y_{t} = \frac{1 + \phi}{\sigma(1-\alpha) + \alpha + \phi} a_{t} + \frac{ (1-\alpha) \log(1-\alpha) }{\sigma(1-\alpha) + \alpha + \phi} \equiv \psi_{ya} a_{t} + y
\\
\omega_{t} = \frac{\sigma + \phi}{\sigma(1-\alpha) + \alpha + \phi} a_{t} + \frac{ \alpha \log(1-\alpha) }{\sigma(1-\alpha) + \alpha + \phi} \equiv \psi_{\omega a} a_{t} + \omega
\\
r_{t} = \rho - \sigma \psi_{ya} (1-\rho_{a})a_{t} + (1-\rho_{z}) z_{t}
\end{cases}
$$

Details on the derivations of these equations are put off to [[#Sticky Prices Evidence, Microfoundations, and Early Models|Chapter 2]].

The Classical model leads to two main neutrality results. After deriving the equilibrium values for the key model variables, we see that these are independent from monetary policy: in fact, no monetary policy rule was required to derive equilibrium. In addition, the equilibrium conditions are also independent from lump-sum taxes and debt. **The role of monetary and fiscal policy is thus simply to determine the level of *nominal variables***.
Note that, in theory, two different regimes would allow to determine the level of nominal variables: a **Ricardian regime** (where monetary policy is active while fiscal policy is passive) and a **non-Ricardian regime** (the opposite). The latter is mainly known as [[#The Fiscal Theory of the Price Level]]: monetary policy is inactive, while fiscal policy determines nominal variables. Of course, there is widespread consensus that the Ricardian regime should be implemented to the expense of the non-Ricardian. Regardless of the choice, however, monetary neutrality holds in both, as it hinges exclusively on the separability of real balances.

Unlike real variables, the exact equilibrium values of nominal variables cannot be set without reference to monetary policy. Therefore, let us consider a couple of different policy rules to determine the price level, inflation, and/or the nominal interest rate.
### Policy
#### Exogenous money growth

Combining the money demand equation (or money market clearing condition), that is $m_{t} - p_{t} = c_{t} - \eta i_{t}$, with the previous solution for the endogenous values — $n_t$, $y_t$, $\omega_t$ and $r_t$ —, and plugging in the definition of real interest rate (as the nominal rate minus inflation, also referred to as the **Fisher equation**, it is possible to sketch a rule for exogenous money growth.

> [!definition] Fisher Equation
> 
> $$
> \begin{equation*}
> i_{t} = r_{t} + \mathbb{E}_{t}[p_{t+1}] - p_{t}
> \end{equation*}
> $$
> 
> ^26558a
> 
> alternatively written in terms of inflation rather than prices as $i_{t} = r_{t} + \mathbb{E}_{t} [\pi_{t+1}]$. In a steady state with perfect foresight, that collapses to:
> 
> $$
> i = \rho + \pi
> $$

Thanks to this equation, it is possible to rewrite the interest in terms of real rate and expected inflation in terms of the price level. Starting from the money demand equation:

$$
\begin{align*}
m_{t} - p_{t} &= c_{t} - \eta i_{t} \\
m_{t} - p_{t} &= c_{t} - \eta ( r_{t} + \mathbb{E}_{t}[p_{t+1}] - p_{t} ) \\
p_{t} (1 - \eta) &= m_{t} - y_{t} + \eta r_{t} + \eta \mathbb{E}_{t} [p_{t+1}] \\
p_{t} &= \left(  \frac{\eta}{1+\eta}  \right) \mathbb{E}_{t} [p_{t+1}] + \frac{m_{t}}{1-\eta} + \frac{\eta r_{t} - y_{t}}{1 + \eta} \\
p_{t} &= \left(  \frac{\eta}{1+\eta}  \right) \mathbb{E}_{t} [p_{t+1}] + \frac{1}{1-\eta}m_{t} + u_{t} \\
p_{t} - m_{t} &= \left(  \frac{\eta}{1+\eta}  \right) \mathbb{E}_{t} [p_{t+1}] + \frac{1 - 1 + \eta}{1-\eta}m_{t} + u_{t} \\
p_{t} - m_{t} &= \left(  \frac{\eta}{1+\eta}  \right) \mathbb{E}_{t} [p_{t+1} - m_{t}] + u_{t} \\
p_{t} - m_{t} &= \left(  \frac{\eta}{1+\eta}  \right) \mathbb{E}_{t} [p_{t+1} - m_{t+1}] + \left(  \frac{\eta}{1+\eta}  \right) \mathbb{E}_{t} [\Delta m_{t+1}] + u_{t} \\
p_{t} - m_{t} &= \left(  \frac{\eta}{1+\eta}  \right)^2 \mathbb{E}_{t} [p_{t+2} - m_{t+2}] + \left(  \frac{\eta}{1+\eta}  \right)^2 \mathbb{E}_{t} [\Delta m_{t+2}] + \frac{\eta}{1+\eta}  \mathbb{E}_{t} [\Delta m_{t+1}] +  \frac{\eta}{1+\eta}   \mathbb{E}_{t} [ u _{t+1} ] + u_{t} \\
\end{align*}
$$

By mathematical induction, complete the forward iteration:

$$
\begin{align*}
p_{t} - m_{t} &= \sum_{k=1}^\infty \left(  \frac{\eta}{1+\eta}  \right)^k \mathbb{E}_{t} [ \Delta m_{t+k} + u_{t+k} ] \\
p_{t} &= m_{t} + \sum_{k=1}^\infty \left(  \frac{\eta}{1+\eta}  \right)^k \mathbb{E}_{t}[\Delta m_{t+k} ] + \bar{u}_{t}
\end{align*}
$$

meaning that, when monetary policy takes the form of an exogenous path for the money supply, the equilibrium price level is always determined uniquely.

Put simply, rearranging terms and in particular collecting $p_t$ on the LHS, the resulting stochastic difference equation collects all the terms independent of monetary policy (real variables) in the term $u_t$. As solved by forward iteration, it was shown that the price level is equal to exogenous current and future level of the money supply. This is usually expressed in growth rates rather than levels, which explains why its was subtracted $m_t$ from both sides.
In the steady state, all the elements RHS are constant: therefore, also $p_t - m_t$ is constant. By taking first differences, we get that $\pi = \Delta m$ is constant in the economy:

$$
\begin{align*}
p_{t} - p_{t-1} &= m_{t} + \sum_{k=1}^\infty \left(  \frac{\eta}{1+\eta}  \right)^k (\pi + u)  - m_{t-1} - \sum_{k=1}^\infty \left(  \frac{\eta}{1+\eta}  \right)^k (\pi + u)
\\
p_{t} - p_{t-1} &= m_{t} - m_{t-1} \\
\Delta p_{t} = \Delta m_{t}
\end{align*}
$$

and therefore:

$$
\begin{align*}
p_{t} - m_{t} &= \sum_{k=1}^\infty \left(  \frac{\eta}{1+\eta}  \right)^k (\pi + u) \\
p_{t} &= m_{t} + \sum_{k=1}^\infty \left(  \frac{\eta}{1+\eta}  \right)^k (\pi + u)
\end{align*}
$$

^c32f10

Inflation responds directly to variations in money growth. The equilibrium price level is a function of money growth, real variables (depending on real shocks), and $m_t$. Note that the price level should grow more than proportional to the price level, as this positively covariates with the expected money growth: this is radically at odds with empirical evidence. Moreover, real shocks also affect the price level.

As for a solution for the interest rate, use the final line of the price equation and to solve for the first line of such equation, that is the money demand equation:

$$
\begin{align*}
i_{t} &=  \frac{1}{\eta} (y_{t} - m_{t} + p_{t}) \\
&= \frac{1}{\eta} \sum_{k=0}^\infty \left( \frac{\eta}{1+\eta} \right)^k \mathbb{E}_{t} [\Delta m_{t+k}] + \underline{u}_{t}
\end{align*}
$$

where $\underline{u}_{t} = \frac{\bar{u}_{t} + y_{t}}{\eta}$. The nominal rate depends on *expected* rather than current growth rate of the money supply (in addition so some real factors), as this of course affects expected inflation, which positively figures in the definition of nominal rates. This is also the original use of the Fisher equation, where the real rate is constant and the nominal rate reacts to money growth. Note that there is no **liquidity effect**, which would occur, instead, if the interest rate and the money supply moved in opposite directions.
#### Interest rate rule

The following rule is a more realistic policy instrument, which resembles more closely the rules used by central banks in actual practice, based on some inflation target. Define a generic interest rale rule as follows:

$$
i_{t} = \rho + \pi + \phi_{\pi} (\pi_{t} - \pi) + v_{t}
$$

^648e11

for $\phi_{\pi} \ge 0$ and the exogenous monetary policy shifter $\{ v_{t} \}$ following an AR(1), where $\rho$ is the steady state natural interst rate. This can be combined with the Fisher equation:

$$
\begin{align*}
\rho + \pi + \phi_{\pi}(\pi_{t} - \pi) &= i_{t} \\
\rho + \pi + \phi_{\pi}(\pi_{t} - \pi) &= r_{t} + \mathbb{E}_{t} [ \pi_{t+1}] - v_{t} \\
\phi_{\pi}(\pi_{t} - \pi) &= r_{t} - \rho + \mathbb{E}_{t} [ \pi_{t+1}]  - \pi - v_{t} \\
\phi_{\pi} \hat{\pi}_{t} &= \hat{r}_{t} + \mathbb{E}_{t} [\hat{\pi}_{t+1}] - v_{t}
\end{align*}
$$

The term $\rho + \pi$ must be consistent with the steady state when inflation is at its target $\pi$. Moreover, $\phi_\pi$ is a parameter indicating how much the interest rate reacts to inflation. Restrict the interest to bounded solution, and observed that the solution differs depending on $\phi_{\pi} \gtreqless  1$.
Suppose $\phi_{\pi} > 1$ and iterate forward:

$$
\hat{\pi}_{t} = \sum_{k=0}^\infty \phi_{\pi}^{-(k+1)} \mathbb{E}_{t} [\hat{r}_{t+k} - v_{t+k}]
$$

^a243c4

Put simply, for any exogenous sequence $\{ \hat{r}_{t+k} \}_{k=0}^\infty$ and a given value of $\phi_\pi > 1$, there exists a unique $\hat\pi_{t}$: current inflation is uniquely pinned down by the reaction parameter, and in particular is equal to:

$$
\pi_{t} = \pi - \frac{\sigma(1-\rho_{a}\psi_{ya})}{\phi_{\pi} - \rho_{a}} a_{t} + \frac{1-\rho_{z}}{\phi_{\pi} - \rho_{z}}z_{t} - \frac{1}{\phi_{\pi} - \rho_{v}}v_{t}
$$

The property of uniquely pinning down the path of the price level is usually referred to as the **Taylor principle**. In this case, the Taylor principle is satisfied only if the nominal interest rate responds to inflation more strongly than 1 to 1 (i.e., $\varphi_\pi > 1$) thus affecting the *real* interest rate. This is also known as **nominal determinacy**.

> [!definition] Taylor Principle
> The interest rate rule must enforce a unique equilibrium.

In contrast, if $\phi_{\pi} \le 1$, then the forward iteration of [[#^a243c4]] diverges because $\phi_\pi^{-(k+1)}$ either fails to decay (when $\phi_\pi = 1$) or grows (when $\phi_\pi < 1$). As a result, no bounded solution exists for inflation. Instead, the stationary solution to [[#^a243c4]] is derived combining [[#^26558a]] with [[#^648e11]]:

$$
\begin{align*}
\phi_{\pi} \hat{\pi}_{t} &= \mathbb{E}_{t}[ \hat{\pi}_{t+1} ] + \hat{r}_{t} - v_{t}
\\
\mathbb{E}_{t}[ \hat{\pi}_{t+1} ]  &= \phi_{\pi} \hat{\pi}_{t} - \hat{r}_{t} + v_{t} \\
\mathbb{E}_{t-1}[ \hat{\pi}_{t} ]  &= \phi_{\pi} \hat{\pi}_{t-1} - \hat{r}_{t-1} + v_{t-1} \\
\hat{\pi}_{t} &= \mathbb{E}_{t-1}[\pi_{t}] + \xi_{t} \\
\hat{\pi}_{t} &= \phi_{\pi} \hat{\pi}_{t-1} - \hat{r}_{t-1} + v_{t-1} + \xi_{t} \\
\pi_{t} - \pi &= \phi_{\pi} (\pi_{t-1} - \pi) - \hat{r}_{t-1} + v_{t-1} + \xi_{t}
\\
\pi_{t} &= (1-\phi_{\pi})\pi + \phi_{\pi} \pi_{t-1} - \hat{r}_{t-1} + v_{t-1} + \xi_{t}
\end{align*}
$$

where $\mathbb{E}_{t}[\xi_{t}] = 0$, introduced in the fourth equality, is a forecast error which is equal to zero in expectation by definition of rational expectations. This implies the system does not yield a unique, stable equilibrium. This result is known as **nominal indeterminacy**: there are infinitely many inflation paths consistent with rational expectations, depending on agents' beliefs. Monetary policy is then ineffective at anchoring inflation expectations: since the sum does not converge, this equilibrium is not bounded, and any initial value $\pi_0$ is compatible with equilibrium. That is, expectations alone can determine inflation outcomes — without a unique path imposed by policy. An example is that of stochastic equilibria, usually referred to as sunspot equilibria, which would in this case be represented as $\hat{\pi}_{t+1} = \phi_{\pi} \hat{\pi}_{t} - \hat{r}_{t} + \xi_{t+1}$ (nominal indeterminacy).
#### Price level rule

Consider an interest rate rule based on the **price level** rather than inflation, $i_t = \rho + \phi_p (p_t - p^*)$ for $\phi_p \ge 0$, where $p_t$ is the log price level, and $p^*$ is the target (steady-state) price level. Combining this with the Fisher equation we get:

$$
\begin{align*}
\rho + \phi_p (p_t - p^*) &= r_t + \mathbb{E}_t [p_{t+1} - p_t] \\
\phi_p (p_t - p^*) + p_t &= \mathbb{E}_t[p_{t+1}] + r_t - \rho \\
(1 + \phi_p) p_t &= \mathbb{E}_t[p_{t+1}] + \hat{r}_t + \phi_p p^* \\
(1 + \phi_p)\hat{p}_t &= \mathbb{E}_t[\hat{p}_{t+1}] + \hat{r}_t
\end{align*}
$$

a forward-looking difference equation. Iterating forward:

$$
\hat{p}_t = \sum_{k=0}^\infty (1 + \phi_p)^{-(k+1)} \mathbb{E}_t [\hat{r}_{t+k}]
$$

As long as $\phi_p > 0$, the term $(1 + \phi_p)^{-(k+1)}$ decays geometrically, ensuring that the sum converges and unique bounded solution for $\hat{p}_t$ exists. This means that any positive reaction to deviations in the price level is sufficient to pin down a unique, stable path for the price level.
#### Optimal Monetary Policy

To find the welfare-optimal monetary policy, start as usual by solving the social planner's problem. In particular, start by characterizing the allocation that solves such problem, which is typically the efficient allocation. Finally, try to come up with policy rules that implement such allocation in the decentralized equilibrium.

The social planner's problem appears as $\max U(C_t, N_t, L_t; Z_t)$ subject to $C_t=A_tN_t^{1-\alpha}$, which means the only restrictions are i) technology and ii) the resource constraint. Note that, while the the social planner faces a static problem, households believe they can transfer resources from a period to another: this is not possible for the economy as a whole. By substitution, rewrite the problem as $\max U ( A_tN_t^{1-\alpha}, N_t, L_t; Z_t)$ and take the FOCs:

$$
\begin{cases}
-\frac{U_{n,t}}{U_{c,t}} = (1-\alpha)A_tN_t^{-\alpha} \\
U_{l,t} = 0
\end{cases}
$$

Can the solution given by the first order conditions be replicated in the decentralized economy taking prices as given? First, consider the efficiency condition: this is always satisfied, regardless of monetary policy, since the marginal rate of substitution equals the real wage, and by the optimality condition of the firm the real wage equals the marginal product of labor (both results follow from perfect competition). The central bank should thus worry about the second condition. Let us compare it with the optimality conditions for households:

$$
\begin{align*}
\frac{U_{l,t}}{U_{c,t}} &= 1 - e^{-i_t} \\
0 &= 1 - e^{-i_t} \\
1 &= e^{-i_t} \\
i_{t} &= 0
\end{align*}
$$
Then, for $U_{l,t}$ to be 0, it must be that the interest rate itself equals zero, that is $i_t=0$ at all times. The result stating that the optimal interest rate rule prescribes 0 nominal rates at all times is known as the **Friedman rule**. The intuition behind this rule relies on a basic welfare principle: the private cost of using some resource or service should be equal to the social cost of producing such service. Applying this to real balances, the social cost of producing real balances (although not been explicitly stated) it was implictly zero: no production function was required to produce money. Since the social cost of producing money is zero, consider the individual cost of holding real balances: these are equated only if the nominal interest rate is 0.

One weird implication of the Friedman rule is that average inflation will end up being negative. In fact, in the steady state, $i = \rho + \pi$: however, since $i=0$, then $\pi = - \rho$, which induces *deflation*, at least on average. This is at odds with actual practice, as most central banks have, in contrast, a small positive inflation target.

Suppose a central bank follows the Friedman rule. This is an example of passive monetary policy rule, which implies inflation indeterminacy: $\phi_\pi=0$. The equilibrium is, thus, not unique (nominal indeterminacy). After all, would a central bank care about nominal indeterminacy in the setting of the classical model? Theoretically not, as nominal variables do not affect utility in any ways. High volatility in the price level would, in other words, be irrelevant for utility.
However, as soon as we suppose — even exogenously — that the  wants to avoid indeterminacy, then how to satisfy this with the Friedman rule? In equilibrium, any sequence $\{\pi_t\}$ satisfying $0= r_t + \mathbb{E} \pi_{t+1}$ should be implemented with $\pi_{t+1} = -r_t$ uniquely determined. To obtain this, take the deviations from the target 0 and make that interest rate deviation proportional to the inflation deviation from the target:

$$
i_t - 0 = \phi(\pi_t - \pi_t^*)
$$

for some $\phi>1$ satisfying the Taylor principle. If the  follows this rule, the Friedman rule will effectively be implemented: iterate one period forward, and take expectations of both sides of the equation:

$$
\mathbb{E}_t\{i_{t+1}\} = \phi i_t
$$

whose only bounded solution is $i_t=0$ so far as the Taylor principle is satisfied, without being explosive.
### Non-Separable Real Balances

So far, the assumption of real-balances separability was crucial to ensure neutrality of monetary policy. However, if changes in real balances affect the marginal utility of consumption or disutility of labor, then real balances will also affect consumption or labor supply and thus be non-separable. Suppose that the marginal utility of consumption *is* affected by real balances:

$$
U(C_t,N_t,L_t) = \mathcal U(C_t,L_t) - V(N_t)
$$

The labor supply schedule becomes:

$$
\frac{W_{t}}{P_{t}} U_{c,t} = V_{n,t}
$$

Assuming that prices, wages, and consumption are constant, differentiate with respect to employment and money demand:

$$
\begin{align*}
\frac{W_{t}}{P_{t}} U_{cl,t} dL_{t} &= V_{nn,t} dN_{t} \\
\frac{dN_{t}}{dL_{t}} &= \frac{W_{t}}{P_{t}} \frac{U_{cl,t}}{V_{nn},t} \\
\end{align*}
$$

which implies:

$$
\begin{align*}
\frac{dN_{t}}{i_{t}} &= \frac{dN_{t}}{dL_{t}} \frac{dL_{t}}{di_{t}} \\
&= \frac{W_{t}}{P_{t}} \frac{U_{cl,t}}{V_{nn,t}} \frac{dL_{t}}{di_{t}}
\end{align*}
$$

Suppose that the increase in real balances affects positively the marginal utility of consumption and labor, i.e. the cross derivative $U_{cl,t}>0$.  If real balances decrease the marginal utility of consumption, then the labor supply shifts to the left: it contracts, as the incentive to work is smaller. Neutrality will not hold: an increase in the interest rate generates a recession (decline in output, increase in unemployment). The opposite occurs with negative cross-derivatives. Positive cross-derivates are, however, a more realistic assumption: not only this holds empirically, but also makes logical sense. In fact, if consumption is high, the marginal utility of maintaining real balances in your pockets should be higher than employment, since employment is aimed exactly to getting even more consumption.
To continue, suppose that the inflation target is raised permanently to a higher level, with a correspondent increase in the nominal rate and thus a permanent decrease in real balances. Then, the previous effects become permanent: monetary policy affected economic activity. This is fact is known as **non-superneutrality of money**. A model where inflation has a permanent effect on economic activity, a very strong result, satisfies the stylized fact that monetary policy is neutral only in the long run. However, calibration and simulations provide results that are not consistent with empirical evidence.

To summarize, calibrated models with non-separable real balances exhibits quantitatively small non-neutralities, large effects of monetary policy shocks on prices, and absence of liquidity effect. An example of non-separability is provided by Walsh (2017). The author specifies a nonseparable utility function, calibrates the model and provides some impulse-response functions to a positive money growth rate shock.

![[Walsh (2017). Figure 2.4.png|center|500]]

Expansionary monetary policy raises the nominal interest rate — consistently with earlier predictions: higher inflation expectations raise the nominal interest rate. Such an increase contracts labor supply and induces a recession, with lower output and employment. Inflation increases significantly: a 1% shock induces a 2-3% increase in inflation. The real money supply goes down as a result. The unpleasant result is that this model has no liquidity effect: a positive increase in money growth is associated with a positive increase in interest, which is not there in the data. Inflation responds basically immediately, which is also false in the data. An increase in the money supply induces a recession, false in the real world. Finally, and devastatingly, the non-neutrality is tiny: an increase in 1% money growth rate, which leads to a substantial increase in the interest rate, leads to a reduction in output of 0.0something percent, not even captured by the statistical agencies. **With non-separable real balances calibrated consistently with empirical estimates of money demand, non-neutralities are very small compared to empirical evidence**. This led the literature to cast aside these models for practical purposes. 
#### Alternative Micro-foundations for Money Demand

There are alternative ways to generate demand for money.
- **Shopping time models** micro-found the demand for money, since leisure is equal to 1 (time endowed) minus the time spent at work and the time that is required to shop: $V(C_t, 1-N_{t} - N_{t}^s)$. This depends on the shopping technology $N_{t}^s = S(C_{t}, L_{t})$: real balances facilitate the transactions. Thus, holding real balances increases utility by diminishing the time waste: $U(C_{t}, N_{t}, L_{t}) \equiv V(C_{t}, 1-N_{t} - S(C_{t},L_{t}))$.
- **Cash in advance constraints** induce demand for money by introducing an additional constraint: consumption expenditures cannot be larger than the amount of money carried over from the previous perdiod (and cash government transfers): $P_tC_t \leq M_t + P_{t} T_{t}$.
- **Cash vs credit goods**, a generalization by Lucas of cash in advance constraints. Suppose Good 1 is a cash good and Good 2 is a credit good: the latter works like consumption so far (no cash in advance is needed, labor income can be directly transformed in consumption), but cash is needed in advance for Good 1. Interesting implications include that changes in inflation effectively affect the relative price of the two goods, distorcing the quantities consumed in an inefficient way (for further treatment, see PS1).
### Global Equilibrium Dynamics

In this section, we will briefly consider equilibria further away from the steady state. In such contexts, log-linearization can no longer be used. Consider an economy like the previous one, with $R=\frac{1}{\beta}$. Money market clearing implies that $\frac{M}{P_t} = Y L (Q_t)$ where $L'(Q_t)>0$. Assuming perfect foresight and using the relationship between $Q_t$ and inflation, that is $Q_t = \frac{1}{R} \frac{P_t}{P_{t+1}}$ or in logs $i_t = \rho + \pi_t$, this becomes $\frac{M}{Y} = P_t L \left( \frac{\beta P_t}{P_{t+1}} \right)$. To continue, find consistent steady state paths without linear approximations. A steady state with a constant price level is defined as $P^* = \frac{M}{YL(\beta)}$. Deviations from this can be found by solving for $P_{t+1}$, with the global equilibrium dynamic: $$P_{t+1} = \frac { \beta  P_t } {L^{-1} \frac{M}{YP_t} } \equiv \phi(P_t)$$It is possible to verify that $\phi'(P_t)>0$ and $\phi'(P^*)>1$.
Note that the transversality condition is violated if the dynamics tend to 0 and in particular if $\lim_{T\to\infty} \frac{M}{P_T} > 0$, since $P_t$ is decreasing at a rate $\beta$ and converging to a positive constant. Thus, it is not an equilibrium. In constrast, equilibria at the right of $P^*$ cannot be ruled out in general: thus, **hyperinflationary equilibria** can be, in principle, admitted. This may hold true even if the money supply is constant: in such cases, the steady state is referred to as a **self fulfilling hyperinflation**, since individuals believe that inflation is incrasing, leading to higher interest rates and lower demand for money, so as to increase the price level. It turns out, however (see Obstfeld and Rogoff, 1983), that these explosive equilibria can be ruled out with a single condition, known as the **Obstfeld Rogoff condition**: $$\lim_{L \to 0} L \cdot U_l > 0$$which is easily satisfied (even with log-utility). An interpretation consistent with the Walsh figure is that, for a finite $P_t$, then $P_{t+1}$ becomes basically vertical, so that no finite price level is consistent with the equilibrium.
### The Fiscal Theory of the Price Level

An unorthodox monetary theory about price determination is the fiscal theory of the price level. In this case, monetary policy is passive, but fiscal policy determines nominal variables. Thus, $Q_t$ is exogenous (constant), there is an exogenous gross constant real interest rate $R_{t} \equiv \frac{1}{Q_{t}} \frac{P_{t}}{P_{t+1}} = \beta^{-1}$, and assume perfect foresight for simplicity. The period government budget constraint is:

$$
\begin{align*}
\frac{B_{t-1}^G + M_{t-1}}{P_{t}} &= Q_{t} \frac{P_{t+1}}{P_{t}} \frac{B_{t}^G + M_{t}}{P_{t+1}} + (1-Q_{t}) \frac{M_{t}}{P_{t}} + T_{t} - G_{t} \\
&= \beta \left(  \frac{B_{t}^G + M_{t}}{P_{t+1}}  \right) + S_{t}
\end{align*}
$$

where $S_t$ denotes the primary surplus. Note that the government exerts **seignorage** of size $(1-Q_{t}) \frac{M_{t}}{P_{t}}$. By forward iteration:

$$
\begin{align*}
\frac{B_{t-1}^G + M_{t-1}}{P_{t}} &= \sum_{k=0}^\infty \beta^k S_{t+k} + \lim_{ T \to \infty } \beta^T  \left(  \frac{B_{t+T}^G + M_{t+T}}{P_{t+1+T}}  \right) \\
\frac{B_{t-1}^G + M_{t-1}}{P_{t}} &= \sum_{k=0}^\infty \beta^k S_{t+k} \tag{G-IBC}
\end{align*}
$$

were we exploited the transversality condition (solvency constraint combined with optimality). For any exogenous $S_t$, the government's intertemporal budget constraint (G-IBC) uniquely determines $P_t$. Take an example of passive fiscal policy, that is for a $\Phi>0$:

$$
\begin{align*}
S_{t} &= \Phi \frac{B_{t-1}^G + M_{t-1}}{P_{t}} \\
\implies & \quad \frac{B^G_{t} + M_{t}}{P_{t+1}} = \sum_{k=0}^\infty \beta^k \Phi S_{t+k} = \frac{1-\Phi}{\beta} \frac{B_{t-1}^G + M_{t-1}}{P_{t}}  \\
\implies & \quad \frac{B^G_{t+T} + M_{t+T}}{P_{t+1+T}} = \left( \frac{1-\Phi}{\beta} \right)^T \frac{B_{t-1}^G + M_{t-1}}{P_{t}}  \\
\implies & \quad \lim_{ T \to \infty } \beta^T \left(  \frac{B^G_{t+T} + M_{t+T}}{P_{t+1+T}}  \right) = (1-\Phi)^T \frac{B_{t-1}^G + M_{t-1}}{P_{t}} = 0
\end{align*}
$$

### The Classical Model and Empirical Evidence

In previous years, the ECB initially adopted the "monetary pillar" for monetary policy, that is it targeted some reference value in the growth of M3 at around to 4.5%, with the aim to pin down inflation anchoring money growth. Despite evidence suggesting that money growth transmits on inflation, it is however not possible to pin down inflation uniquely by controlling the money supply. The Classical model shows that other policy rules, like interest rate rules, can control inflation better than money supply, as the latter can react to many shocks such as money demand shocks. Although it holds in equilibrium that money supply and inflation are related, this is not a direct connection that should be leveraged upon, especially off-equilibrium.

As regards the short run, some predictions of the classical model are too strong and rebuted by the data. Consider the effects of exogenous monetary policy shocks, that is a policy which is not elicited by the economy but imposed exogenously. The paper considered is Christiano, Eichenbaum and Evans (1999), focusing on the federal funds rate — the U.S. main instrument for monetary policy. Suppose for practical purposes that the data generating process for the nominal rate follows a linear model: $i_t = X_t^\intercal \beta + \varepsilon_t^m$. Obviously, the errors are not directly observable and have to be measured. A natural approach is estimating the rule and then recovering the residuals; finally, take variables of interest $X_t$ and regress these on the value of current monetary policy shocks, as $X_t = \sum_{k=0}^\infty \gamma_k^\intercal \varepsilon_{t-1}^m$. This allows to isolate the effect of monetary policy shocks from other shocks. Performing this calculation shows that, when the Federal Funds are raised persistently (persistent tightening), GDP also declines persistently. Second, in the short run, the GDP deflator hardly changes and declines eventually more slowly. Finally, the measure of money supply declines persistently. The key takehome message is that the response of the price level is basically unresponsive of the Funds rate. Moreover, the Classical model predicted no liquidity effect (oney supply and interest rate moved in same direction). Empirically, the opposite occurs: money supply and interest rates move in opposite directions.

> [!definition] Liquidity Effect
> **Liquidity effect** refers to the money supply and the interest rate moving in opposite directions.

Similar results are obtained by Jaroncinski and Karadi (2020), focusing on the 30-minute window span when the Fed announced rates.

<div style="page-break-after: always;"></div>

## Sticky Prices: Evidence, Microfoundations, and Early Models

Microeconomic evidence can help in grounding the patterns followed by individual prices. In particular, it is observed that there are some goods (manufacturing goods, both durables and nondurables, and services) whose prices remain constant for significant amounts of time, and occasionally change discretely in some direction. In contrast, prices for food and energy change more frequently, almost continuously in some cases. In what follows, then, we will focus accordingly on **sticky prices**. Stickiness refers to the frequency of price changes: the fraction of firms that adjusts the price of individual goos (or the fraction of goods whose price is adjusted in a given month). Empirical evidence suggests that only 12% of prices are adjusted every given month! Moreover, prices in the EU are in general more flexible than the US. Some literature (including Benigno) suggests that more emphasis should be put on stickier prices, and when these start adjusting more frequently, triggering serious inflation spirals. However, only recently did we start collecting data on price changes, and for most of the time inflation was very flat (this changed with the COVID inflation surge). Nakamura, Steinsson, Sun and Villar (QJE, 2020) still tried to reconstruct price adjustment back to the 70s, and realized that the frequency of price change correlates almost by 0 when inflation is low; however, when inflation is triggered, there is a significant positive correlation. This was confirmed in a ECB Economic Bulletin (Dedola et al. 3/2024), while price decreases are absolutely constant and low. Additional evidence in Argentina suggests that low inflation does not affect the frequency of price changes, but when inflation increases then it basically induces more frequent adjustments.
Eventually, models of price stickiness assume that the frequency of price changes is constant. However, this is a reasonable simplification only to the extent that inflation remains low and steady. To model episodes of higher inflation, then the sticky prices models would not be appropriate.
### Microfoundations for Price Stickiness
In the 80s, microfounding macroeconomics was popularized as a key issue and the main priority. Price stickiness is no less microfounded, as will be showed in this section. Let us consider a firm that sets prices independently, moving away from the assumption of perfect competition. Suppose their profit function is given by $D(p(i), Y)$, where $p(i) \equiv \frac{P(i)}{P}$ and $Y$ is a profit shifter. Real profits for firm $i$ depends on the relative price of the good, and $Y$ shifts the profit function, interpreted as aggregate output. Standard neoclassical assumptions include concavity with respect to prices, that is $D_{pp}<0, D_{py}\geq0$.
The optimal price setting condition requires that:$$D_{p} (p(i)^*, Y) = 0$$while the optimal price adjustment in response to $dY$ is as follows:$$D_{pp}dp(i)^* + D_{py} dY = 0$$which implies, by multiplying and dividing by the level of $Y$:

$$
\begin{align*} dp(i)^* &= - \frac{D_{py}}{D_{pp}} dY \\
&= \Phi dy
\end{align*}
$$

where $\Phi \equiv -Y \frac{D_{py}}{D_{pp} }>0$ is an inverse index of real rigidities. Put simply, if $\Phi$ is large, real rigidities are small; if $\Phi$ are small, there are large real rigidities.
Let us consider the economy as a whole, with many identical firms in a symmetric equilibrium. Relative prices must sum up to 1, which induces the initial equilibrium as a symmetric equilibrium with flexible prices $D_p(1,Y_0)=0$, which pins down $Y_{0}$. A small change in the profit shifter induces a new optimal price $D_p(p(i)^*,Y)=0$ when other firms do not adjust, for any reason. $Y$ has not changed, but relative prices are affected. Approximating $D(1,Y)$ near the optimum when firms do not adjust:

$$
\begin{align*} D(1,Y) & \approx D(p(i)^*,Y) + \overbrace{D_{p}(p(i)^*,Y)}^{=0 \text{ by optimality}} (1-p(i)^*) + \frac{1}{2} D_{pp} (p(i)^*, Y)(1-p(i)^*)^2 \\ & \approx D(p(i)^*,Y) + \frac{1}{2} D_{pp} (p(i)^*, Y)(1-p(i)^*)^2
\end{align*}
$$

Thus, the gain from price adjustment when other firms do not adjust is equal to

$$
D(p(i)^*, Y) - D(1-Y) \approx - \frac{1}{2} D_{pp} \Phi^2 (dy)^2 > 0
$$

If we assume that $PY=M$, then $dy + \pi = dm$; since other firms do not adjust, $\pi=0$ and thus $dy = dm$. Rewrite the previous as

$$
D(p(i)^*, Y) - D(1-Y) \approx - \frac{1}{2} D_{pp} \Phi^2 (dm)^2 > 0
$$

that can be also interpreted as the opportunity cost of **not** adjusting the price. The effects on profits are of second order, normally smaller the flatter the profit function is. The stronger the real rigidities, the smaller the $\Phi$ and thus the smaller the potential profit gain.

However, suppose there is a menu cost, a small cost of adjusting the price. This menu cost may be small, but still larger than the losses for not adjusting the prices. In such cases, firms choose not to adjust the price, and this is an equilibrium. In such cases, inflation is 0 and **output changes in proportion to the money supply: the change in money supply has first order real effects**. This is more likely to happen for small $\Phi$, weak concavity of the profit function, and the smaller the shock $dm$. If the marginal product of labor is higher than the marginal rate of substitution, as it normally is (due to market power, distortionary taxation, and other practices that make the level of economic activity lower than efficiency), then the economic outcome of increasing money supply has first order welfare effects (that is, effect of the same effect of the change in money supply). The salient result is that tiny, **second order menu costs are sufficient to induce first order real effects of monetary shocks**.

Multiple equilibria may arise if other firms adjust, and firm $i$ does not adjust its profits. Then, these are given by $D\left ( \frac{1}{1+dm}, Y \right )$. Approximating around $D(1,Y)$:

$$
\begin{align*}
D \left(  \frac{1}{1+dm}, Y  \right) &\approx D(1,Y) + D_{p}(1,Y) \left( \frac{1}{1+dm} - 1  \right) + \frac{1}{2} D_{pp} (1,Y) \left(  \frac{1}{1+dm} - 1  \right)^2 \\
&\approx D(1,Y) + \frac{1}{2} D_{pp} \left(  \frac{dm}{1 + dm} \right)^2
\end{align*}
$$

Which implies a gain from price adjustment when other firms adjust equal to 

$$
D(1,Y) - D \left(  \frac{1}{1 + dm}, Y \right) \approx - \frac{1}{2} D_{pp} \left(  \frac{dm}{1+dm} \right)^2 > 0
$$

Note that multiple equilibria may occur if the following condition holds: $$D(1,Y) - D \left(  \frac{1}{1 + dm}, Y \right) > \varkappa > D(p(i)^*, Y) - D(1,Y)$$or equivalently $\Phi < \frac{1}{1 + dm}$.

### A Model with Price-Setting Advantage

The classical reference for this is Blanchard and Kiyotaki (1987), although we'll consider Romer's (2019) version. Consider the usual infinitely-lived utility maximizing households with objective function $\max \mathbb{E}_{0} \sum_{t=0}^\infty \beta^t U(C_{t},N_{t})$, where $C_t= \left( \int^1_0 C_t(i)^{1- 1/\varepsilon } di \right)^{ \frac{\epsilon}{\epsilon - 1} }$. That is, $C_t$ is an index of the quantity of good consumed for a continuum of goods $i$, where the CES function suggests that goods have some degree of substitution elasticity $\epsilon>1$. As usual $\beta \equiv e^{- \rho}$. The usual resource constraint and cash-in-advance constraint hold:

$$
\begin{cases}
\int_{0}^1 P_{t}(i) C_{t}(i) \;di + Q_{t} B_{t} + M_{t} \leq B_{t-1} + M_{t-1} + P_{t} D_{t} - P_{t} T_{t} \\
\int_{0}^1P_{t}(i)C_{t}(i)\;di + P_{t}T_{t} \leq M_{t-1}
\end{cases}
$$

together with the usual solvency constraint

$$
\lim_{ T \to \infty } \mathbb{E}_{t} \{\Lambda_{t, t+T}, \mathcal{A}_{t+T} \} \geq 0
$$

where $\mathcal{A_{t}} \equiv  \frac{B_{t-1} + M_{t-1}}{P_{t}}$

The important feature of the model is that firms set prices *before* economic shocks occur, and once these happen firms are stuck to their prices for one period. This one period delay is the main source of price stickiness. Last, money demand will be introduced as a cash-in-advance constraint. This and the budget constraint appear as in the classical model, with the only difference in the consumption integral.

#### Household optimality

In a first stage, solve the problem of optimal allocation of expenditure. For every given consumption index, it is optimal for the households to minimize the expenditure in order to obtain such level of consumption for each specific commodity, subject to attaining the level of final consumption index $C_t$: that is

$$
\min_{ \{C_t(i)\} } \int_0^1 P_t(i)C_t(i)di \quad\text{such that } \left( \int_0^1 C_t(i)^{1- \frac{1}{\epsilon}} di \right)^{\frac{\epsilon}{\epsilon - 1}} = C_{t}
$$

It can be shown that the optimality condition is satisfied given the following **implied demand function** for each good:

$$
C_t(i) = \left( \frac{P_t(i)}{P_t} \right)^{-\epsilon} C_t
$$

where $P_{t} = \left( \int_{0}^1 P_{t}(i)^{1-\epsilon} \; di \right)^{ \frac{1}{1-\epsilon} }$. The additional implication is that the implied demand function satisfies the following condition, so as to be written conveniently as

$$
\int_0^1 P_t(i)C_t(i)di = P_tC_t
$$

allowing to tread the problem as if there were a single good.

> [!focus] Price Level
> The aggregate price level $P_t$ is defined as:
>
> $$
> P_{t} := \left( \int_{0}^1 P_{t}(j)^{1 - \epsilon} \, dj  \right)^{\frac{1}{1 - \epsilon}}
> $$
>
> Raising both sides to the power of $1 - \epsilon$:
>
> $$
> P_{t}^{1 - \epsilon} = \int_{0}^1 P_{t}(j)^{1 - \epsilon} \, dj
> $$
> 
> Substituting this back into the expression for $C_t$:
> 
> $$
> C_{t}(i) P_{t}(i)^\epsilon \left( P_{t}^{1 - \epsilon} \right)^{\frac{\epsilon}{\epsilon-1}} = C_{t}(i) P_{t}(i)^\epsilon P_{t}^{-\epsilon}
> $$

In a second stage, determine optimal consumption, money supply and labor demand. This is the same problem solved in the classical model, with the additional assumption that the nominal interest rate is positive (in equilibrium) and thus the cash in advance constraint will always be satisfied with equality. Set up the Lagrangian:

$$
\mathcal L = \int_{0}^1 P_t(i) C_{t}(i) \, di + \lambda \left[  C_{t} - \left( \int_{0}^1 C_{t}(i)^{1- 1/\epsilon} \, di \right)^{\frac{\epsilon}{\epsilon-1}}  \right]
$$

with FOC:

$$
\begin{align*}
\frac{\partial \mathcal L}{\partial C_{t}(i)} &= 0
\\
\frac{\partial }{\partial C_{t}(i)} \int_{0}^1 P_t(i) C_{t}(i) \, di &=  - \lambda \frac{\partial }{\partial C_{t}(i)} \left( \int_{0}^1 C_{t}(i)^{1- 1/\epsilon} \, di \right)^{\frac{\epsilon}{\epsilon-1}} 
\\
\int_{0}^1 \frac{\partial }{\partial C_{t}(i)} P_t(i) C_{t}(i) \, di &= - \frac{\epsilon}{\epsilon-1} \lambda \left(  \int_{0}^1 C_{t}(i)^{1- 1/\epsilon} \, di \right)^{\frac{1}{\epsilon-1}} \frac{\partial }{\partial C_{t}(i)} \int_{0}^1 C_{t}(s)^{1- 1/\epsilon} \, ds
\\
\int_{0}^1 \frac{\partial }{\partial C_{t}(i)} P_t(i) C_{t}(i) \, di &= - \frac{\epsilon}{\epsilon-1} \lambda \left(  \int_{0}^1 C_{t}(i)^{1- 1/\epsilon} \, di \right)^{\frac{1}{\epsilon-1}} \int_{0}^1 \frac{\partial C_{t}(i)^{\frac{\epsilon - 1}{\epsilon}}  }{\partial C_{t}(i)}  \frac{\partial C_{t}(i) }{\partial C_{t}(s)} \, ds
\\
\int_{0}^1 \frac{\partial }{\partial C_{t}(i)} P_t(i) C_{t}(i) \, di &= - \frac{\epsilon}{\epsilon-1} \lambda \left(  \int_{0}^1 C_{t}(i)^{1- 1/\epsilon} \, di \right)^{\frac{1}{\epsilon-1}} \int_{0}^1 \frac{\partial C_{t}(i)^{\frac{\epsilon - 1}{\epsilon}}  }{\partial C_{t}(i)}  \delta(s-i) \, ds
\\
P_{t}(i) &= \frac{\epsilon}{\epsilon-1} \lambda \left(  \int_{0}^1 C_{t}(i)^{ 1/\epsilon} \, di \right)^{\frac{1}{\epsilon-1}} \frac{\epsilon -1 }{\epsilon}  C_{t}(i)^{-\frac{1}{\epsilon}}
\\
P_{t}(i) &= \lambda \left(  \int_{0}^1 C_{t}(i)^{ 1/\epsilon} \, di \right)^{\frac{1}{\epsilon-1}} C_{t}(i)^{-\frac{1}{\epsilon}}
\end{align*}
$$

which holds for all $i\in[0,1]$ (the derivative has been derived exploiting the property of the [[Functional Derivative, Dirac Delta, and the Calculus of Variations|Dirac Delta]], here denoted as $\delta$, of integrating to 1).
Note that:

$$
\begin{cases}
C_{t}(i) &= \left(  \frac{P_{t}(i)}{ \lambda \left(  \int_{0}^1 C_{t}(i)^{ 1/\epsilon} \, di \right)^{\frac{1}{\epsilon-1}} } \right)^{-\epsilon} \\
C_{t}(j) &= \left(  \frac{P_{t}(j)}{ \lambda \left(  \int_{0}^1 C_{t}(i)^{ 1/\epsilon} \, di \right)^{\frac{1}{\epsilon-1}} } \right)^{-\epsilon}
\end{cases}
\quad\implies\quad
C_{t}(j) = \left(  \frac{P_{t}(i)}{P_{t}(j)}  \right)^\epsilon C_{t}(i)
$$

which allows to compute the aggregate demand for consumption goods:

$$
\begin{align*}
C_{t} &:= \left( \int_{0}^1 C_{t}(j)^{\frac{\epsilon-1}{\epsilon}} \, dj  \right)^{\frac{\epsilon}{\epsilon-1}}
\\
&= \left( \int_{0}^1 \left[\left(  \frac{P_{t}(i)}{P_{t}(j)}  \right)^\epsilon C_{t}(i) \right] ^{\frac{\epsilon-1}{\epsilon}} \, dj  \right)^{\frac{\epsilon}{\epsilon-1}}
\\
&= C_{t}(i) P_{t}(i)^\epsilon \left( \int_{0}^1 P_{t}(j)^{1 - \epsilon}  \, dj  \right)^{\frac{\epsilon}{\epsilon-1}}
\\
&= C_{t}(i) P_{t}(i)^\epsilon P_{t}^{-\epsilon}
\\
\iff C_{t}(i) &= \left(  \frac{P_{t}(i)}{P_{t}} \right)^{-\epsilon} C_{t}
\end{align*}
$$

Recall that the households optimality conditions are as follows:

$$
\begin{align*}
- \frac{U_{n,t}}{U_{c,t}} &= \frac{W_{t}}{P_{t}} \\
Q_{t} &= \beta \mathbb{E} \left[  \frac{U_{c,t+1}}{U_{c,t}} \frac{P_{t}}{P_{t+1}}  \right] \\
P_{t}C_{t} + P_{t} T_{t} &= M_{t-1}
\end{align*}
$$

Moreover, it can be assumed in equilibrium that $P_t T_{t} = - \Delta M_{t}$, and thus $P_tC_t = M_t$. Assume the conventional CRRA utility function and derive the log-linearized optimality conditions:

$$
\begin{align*}
U(C_{t},N_{t}) &=
\begin{cases}
\frac{C_{t}^{1-\sigma}-1}{1-\sigma} - \frac{N_{t}^{1+\phi}}{1+\phi} & \sigma\neq{1} \\
\log(C_{t}) - \frac{N_{t}^{1+\phi}}{1+\phi} & \sigma={1}
\end{cases}
\\ \\
w_{t} - p_{t} &= \sigma c_{t} + \phi n_{t}
\\
c_{t} &= \mathbb{E}[c_{t+1}] - \frac{1}{\sigma} ( i_{t} - \mathbb{E}[\pi_{t+1}] -\rho )
\\
m_t &= p_{t} + c_{t}
\end{align*}
$$

^1fa0f4

#### Firm optimality: Flexible prices

The firm problem changes as the firm can set the price, subject to a demand constraint (monopolistic competition). As will be shown below, the optimality condition is equal to the desired markup $\mathcal M \equiv \frac{\epsilon}{\epsilon - 1}$ times the production cost given the output. To set up the problem, consider the usual technology $Y_t(i) = A_{t} N_{t}(i)^{1-\alpha}$ and define the (log-linearized) **wage-to-marginal-product-of-labor ratio**:

$$
\psi_{t}(i) = w_{t} - [ a_{t} - \alpha n_{t}(i) + \log(1-\alpha) ]
$$

It is now possible to set up the firms' profit maximization problem subject to the cost function $\mathcal C$:

$$
\varpi_{t}:= \max_{P_{t}(i)} P_{t}(i) Y_{t}(i) - \mathcal C (Y_{t}(i)) \quad\text{subject to } Y_{t}(i) = \left(  \frac{P_{t}(i)}{P_{t}}  \right)^{-\epsilon} C_{t}
$$

as previously derived. To obtain the optimality conditions, take the derivative of the objective function with respect to $P_t(i)$, equate it to 0, and then produce the quantity determined by the demand function by imposing the constraint:

$$
\begin{align*}
\frac{\partial\varpi}{\partial P_{t}(i)} &= 0
\\
\frac{\partial}{\partial P_{t}(i)} \Big[ P_{t}(i) Y_{t}(i) - \mathcal C (Y_{t}(i)) \Big] &= 0
\\
\frac{\partial}{\partial P_{t}(i)} \left[ P_{t}(i)^{1-\epsilon} P_{t}^\epsilon C_{t} - \mathcal C \left( \left(  \frac{P_{t}(i)}{P_{t}}  \right)^{-\epsilon} C_{t} \right) \right] &= 0
\\
(\epsilon-1) P_{t}(i)^{-\epsilon} P_{t}^\epsilon C_{t} &= \epsilon P_{t}(i)^{-\epsilon-1} P_{t}^\epsilon C_{t} \Psi_{t}(i)
\\
P_{t}(i)^{-\epsilon}  &= \frac{\epsilon}{\epsilon-1} P_{t}(i)^{-\epsilon-1}  \Psi_{t}(i)
\end{align*}
$$

which leads to:

$$
P_{t}(i) = \mathcal M_{t} \Psi_{t}(i)
$$

Two new objects are hereby introduced: ^482244
- the **desired markup** $\mathcal M_{t}(i) \equiv \frac{\epsilon}{\epsilon-1}$
- the **marginal cost of labor** $\Psi_{t}(i) \equiv \mathcal{C}'(Y_{t}(i))$, which is firm-specific as different production level may induce different marginal costs.
Note that the previous result implies that the desired markup is constant and equal to

$$
\mathcal M \;\equiv\; \frac{P_{t}(i)}{\Psi_{t}(i)} \;=\; \mathcal M_{t}(i)
$$

The optimality condition of the firm can be log-linearized, and extended to the aggregate firm sector invoking symmetry:

$$
\begin{align*}
p_{t}(i) &= \mu + \psi_{t}(i)
\\
p_{t} &= \mu + \psi_{t}
\end{align*}
$$

which compares to the perfect competition scenario as:

$$
w_{t} - p_{t} = mpn_{t} \quad\implies\quad p_{t} = w_{t} - mpn_{t} = \psi_{t}
$$

To compute the equilibrium, exploit the price setting equation. Recall that, given our production function, the marginal cost is equal to $\Psi_{t} = W_{t} - (1-\alpha)_{t} A_{t} N^{-\alpha}$ which is log-linearized as $\psi_{t} = w_{t} - a_{t} + \alpha n_{t} - \log(1-\alpha)$. This can be seen as follows:

$$
\begin{align*}
N_{t} &= \int_{0}^1 N_{t}(i) \,di
\\
&= \int_{0}^1 \left(  \frac{Y_{t}(i)}{A_{t}}  \right)^{\frac{1}{1-\alpha}} \,di
\\
&= \left( \frac{Y_{t}}{A_{t}} \right)^{\frac{1}{1-\alpha}} \int_{0}^1 \left( \frac{P_{t}(i)}{P_{t}} \right)^{-\frac{\epsilon}{1-\alpha}} \,di
\\
(1-\alpha) n_{t} &= y_{t} - a_{t} + \log \left\{ (1-\alpha)\int_{0}^1 \left( \frac{P_{t}(i)}{P_{t}} \right)^{-\frac{\epsilon}{1-\alpha}} \right\}
\end{align*}
$$

where $\log \left\{ (1-\alpha)\int_{0}^1 \left( \frac{P_{t}(i)}{P_{t}} \right)^{-\frac{\epsilon}{1-\alpha}} \right\}$ is an index of **price dispersion** and is equal to zero up to a first order approximation (the result is proved [[#^12b3bf|below]]).

> [!focus]- Price Dispersion
>
> By definition of $P_t$:
> 
> $$
> 1 = \int_{0}^1 \left(  \frac{P_{t}(i)}{P_{t}} \right)^{1-\epsilon} \,di \tag{A}
> $$
> 
> Note that it can be rewritten $\left( \frac{P_{t}(i)}{P_{t}} \right)^{1-\epsilon} = \exp\{(1-\epsilon) \hat{p}_{t}\}$, where $\hat{p}_{t} = p_{t(i) - p_{t}}$. Its second order approximation yields:
> 
> $$
> \begin{align*}
\exp\{(1-\epsilon) \hat{p}_{t}\} &\approx 1 + (1-\epsilon)\hat{p}_{t}(i) + \frac{1}{2} (1-\epsilon)^2 \hat{p}_{t}(i)
> \\
> 0 &\approx (1-\epsilon) \mathbb{E}_{i}[\hat{p}_{t}(i)] + \frac{1}{2} \mathbb{E}_{i} [\hat{p}_{t}(i)]
> \\
> \mathbb{E}_{i} [\hat{p}_{t}(i)] &\approx \frac{\epsilon-1}{2} \mathbb{E}_{i}[\hat{p}_{t}(i)^2]
> \end{align*}
> $$
> 
> This can be plugged in a second-order approximation of $\left(  \frac{P_{t}(i)}{P_{t}} \right)^{-\frac{\epsilon}{1-\alpha}}$ around 0, that is $1 + \frac{1}{2} \left( \frac{\epsilon}{1-\alpha} \right)^2 \hat{p}_{t}(i)$, so as to obtain:
> 
> $$
> \begin{align*}
\int_{0}^1 \left(  \frac{P_{t}(i)}{P_{t}} \right)^{-\frac{\epsilon}{1-\alpha}} \,di &= 1 + \frac{1}{2}\left( \frac{\epsilon}{1-\alpha} \right) \frac{1}{\Theta} \text{var}_{i}(p_{t}(i))
> \end{align*}
> $$
> 
> where $\Theta = \frac{1-\alpha}{1-\alpha+\alpha\epsilon}$. Plugging this into the definition of price dispersion, that is equal - up to a second order approximation - to:
> 
> $$
> d_{t} \approx \frac{\epsilon}{2\Theta} \text{var}_{i}(p_{t}(i))
> $$
>

^b5b102

Thus:
 
$$
\begin{align*}
p_{t} &= \mu + \psi_{t}
\\
&= \mu + w_{t} - a_{t} + \alpha n_{t} - \log(1-\alpha)
\\
0 &= \mu + \sigma y_{t} + \phi n_{t} - a_{t} + \alpha n_{t} - \log(1-\alpha)
\\
0 &= \mu + \sigma a_{t} + \sigma (1-\alpha) n_{t} + \phi n_{t} - a_{t}+ \alpha n_{t} - \log(1-\alpha)
\\
0 &= n_{t}[\sigma(1-\alpha) + \phi + \alpha] + \mu + \sigma a_{t}- a_{t} - \log(1-\alpha)
\\
- n_{t} &= \frac{ \mu + (\sigma-1) a_{t} - \log(1-\alpha) } { \sigma(1-\alpha) + \phi + \alpha }
\\
\frac{a_{t} - y_{t} }{1 - \alpha} &= \frac{ \mu - \log(1-\alpha) } { \sigma(1-\alpha) + \phi - \alpha } - \frac{a_{t}(\sigma - 1)}{\sigma(1-\alpha) + \phi - \alpha }
\\
- y_{t} &= \frac{(1-\alpha)[ \mu - \log(1-\alpha) ] }{\sigma(1-\alpha) + \phi + \alpha} - a_{t} \left( \frac{(1-\alpha) (\sigma-1) }{\sigma(1-\alpha) + \phi + \alpha} -1 \right)
\\
y_{t} &= \frac{(1-\alpha)[ \log(1-\alpha) - \mu ] }{\sigma(1-\alpha) + \phi + \alpha} + \frac{ 1+\phi }{\sigma(1-\alpha) + \phi + \alpha}
\end{align*}
$$

^4f8e50

where the equalities in line 2, 3, 4 and 5 follow respectively from the definition of $\psi_{t}$, from the household optimality conditions at [[#^1fa0f4]], from market clearing and the technological constraint. Recall the goods market clearing condition $y_{t} = c_{t}$, and the production function $y_{t} = a_{t} + (1-\alpha)n_{t}$ which allows to express labor supply as $n_{t} = \frac{y_{t} - a_{t}}{1 - \alpha}$. The level of output derived under flexible prices can be referred to as the **natural level of output** and denoted as $y_{t}^n$:

$$
y_{t} = \psi_{ya} a_{t} + \psi_{y}^\mu \equiv y_{t}^n
$$

where $\psi_{ya} \equiv \frac{1+\phi}{\sigma(1-\alpha) + \phi + \alpha}$ and $\psi_{y}^\mu \equiv \frac{(1-\alpha)[\log(1-\alpha) - \mu]}{\sigma(1-\alpha) + \phi + \alpha}$. Comparing this expression to the classical monetary model case, note that this is almost identical. The only difference lies in the markup, which of  course could not be present in the classical model due to perfect competition. Put simply, the fact that firms are monopolistic competitors does not change the way the output responds to technology shocks. **The introduction of market power affects only the mean level of output at the steady state: it lowers the level around which output fluctuates, without changing the response to shocks**. As for the real interest rate, this remains totally unaffected, with same mean as before.


> [!focus] Employment, real wages, and the real rate
>
> Compute the levels of employment, real wages, and real interest rate and compare these to the classical model. In the flexible prices monopolistic model, these three quantities are as follows:
> 
> $$
> \begin{cases}
> n_{t} &= \frac{\log(1-\alpha)+  a(1-\sigma) - \mu}{\sigma(1-\alpha) + \phi + \alpha} \\
> \omega_{t} &= \frac{[\sigma(1-\alpha) + \phi][\log(1-\alpha)-\mu]}{\sigma(1-\alpha) + \phi + \alpha} + \frac{\sigma + \phi}{\sigma(1-\alpha) + \phi + \alpha} a_{t} \\
> r_{t} &= \rho - \sigma \psi_{ya} (1-\rho_{a})a_{t} + (1-\rho_{z})z_{t}
> \end{cases}
> $$
> 
> which compares to the classical model as follows:
>
> $$
> \begin{cases}
> n_{t} &= \frac{\log(1-\alpha) + a_{t}(1-\alpha)}{\sigma(1-\alpha) + \phi + \alpha}
> \\
> \omega_{t} &= \frac{[\sigma(1-\alpha) + \phi]\log(1-\alpha)}{\sigma(1-\alpha) + \phi + \alpha} + \frac{\sigma + \phi}{\sigma(1-\alpha) + \phi + \alpha} a_{t} \\
> r_{t} &= \rho - \sigma \psi_{ya} (1-\rho_{a})a_{t} + (1-\rho_{z})z_{t}
> \end{cases}
> $$
> 
> These objects are also referred to as $\psi_{ya} \equiv \frac{1+\phi}{\sigma(1-\alpha) + \phi + \alpha}$ and $\psi_{y}^\mu \equiv \frac{(1-\alpha)[\log(1-\alpha) - \mu]}{\sigma(1-\alpha) + \phi + \alpha}$. Note that the main discriminant of the two is the realized markup, shifting the outcome component of the monopolistic model. However, the real rate is the same as in the classical model, since $\psi_{ya}$ and $a_{t}$ are not affected by the markup.

^a18255

#### Firm optimality: Nominal rigidities

Now assume that prices are set in advance, that is at the beginning of each period before the shock are realized (sticky prices) rather than at the end of the period in response to just occurred shocks (flexible prices). The new firm problem is as follows:

$$
\max_{P_{t}(i)} \mathbb{E}_{t-1} \left\{ \Lambda_{t-1,t} \frac{1}{P_{t}} \Big[ P_{t}(i)Y_{t}(i) - \mathcal{C}_{t}(Y_{t}(i)) \Big]  \right\} \quad\text{subject to } Y_{t}(i) = \left( \frac{ P_{t}(i) }{ P_{t} } \right)^{-\epsilon} C_{t}
$$

where $\Lambda_{t-1,t} \equiv \beta \frac{U_{c,t}}{U_{c,t-1}}$. The optimality conditions follow a derivation similar to [[#^482244|the model with flexible prices]] and yields:

$$
\mathbb{E}_{t-1} \left\{  \Lambda_{t-1,t} Y_{t}(i) \frac{1}{P_{t}} \Big[ P_{t}(i) - \mathcal{M} \Psi_{t}(i) \Big]  \right\} = 0
$$

or, equivalently, by factorizing out $\Psi_{t}(i)$:

$$
\mathbb{E}_{t-1} \left\{  \Lambda_{t-1,t} Y_{t}(i) \frac{ \Psi_{t}(i)}{P_{t}} \Big[ \mathcal{M}_t(i) - \mathcal{M} \Big]  \right\} = 0
$$

where $\mathcal{M}_{t}(i) \equiv \frac{P_{t}(i)}{\Psi_{t}(i)}$. This suggests a perfect foresight steady steady as $\mathcal{M}(i) = \mathcal{M}$.

To log linearize the optimality conditions of the firm, beware not to log-linearize by Taylor expanding around $P_t$ or $\Psi_t$: these quantities have ne steady state value, and when they are shocked they move permanently. Instead, in order to transform the conditions into state steady variables, divide and multiply by $\Psi_t(i)$, and express everything in terms of the markup. Note that both $\Psi_t(i)$ and $P_t(i)$ are equal to 0 when evaluated at the steady state, since these are chosen optimally. Find that the firm will set the price so that the expected markup equalizes the desired markup.

$$
\begin{align*}
\mathbb{E}_{t-1} \left\{ \Lambda_{t-1,t} Y_{t}(i) \frac{\Psi_{t}(i)}{P_{t}} [\mathcal{M}_{t}(i) - \mathcal{M}] \right\} &= 0
\\
\approx\quad \mathbb{E}_{t-1} \left\{ \left(\overline{\Lambda Y \frac{\Psi}{P}}\right) [\mathcal{M}_t(i) - \mathcal{M}] \right\} &\approx 0
\\
\mathbb{E}_{t-1} \left\{  \left(\beta\bar{Y} \overline{ \frac{\Psi}{P} }\right) [\mathcal{M}_t(i) - \mathcal{M}] \right\} &\approx 0
\\
\mathbb{E}_{t-1} \left\{  [\mathcal{M}_t(i) - \mathcal{M}] \right\} &\approx 0
\\
\approx \quad \mathbb{E}_{t-1} \left\{  \log(\mathcal{M}_t(i)) - \log(\mathcal{M}) \right\} &\approx 0
\end{align*}
$$

^93467a

$$
\begin{cases}
\mathbb{E}_{t-1} [\mu_{t}(i)] \approx \mu
\\
p_{t}(i) - \mathbb{E}_{t-1}[\psi_{t}(i)] = \mu
\end{cases}
$$

where linear approximations have been introduced in the second line and in the sixth line (Jensen's inequality). A comment on $\frac{\Psi_{t}(i)}{P_{t}}$: this is the firm's nominal marginal cost divided by the aggregate price level and represents a form of real marginal cost. In the steady-state, nominal marginal cost tend to grow with the aggregate price level; thus, their ratio is often stationary, even if the element themselves are not.
Symmetry can be invoked so as to generalize these conditions:

$$
\begin{gather}
\mathbb{E}_{t-1} [\mu_{t}] = \mu
\\
p_{t} = \mu + \mathbb{E}_{t-1}[\psi_{t}] 
\end{gather}
$$

and finally to compute the average markup in the economy:

$$
\begin{align*}
\mu_{t} &= p_{t} - \psi_{t}
\\
&= p_{t} - w_{t} + a_{t} - \alpha n_{t} + \log(1-\alpha)
\\
&= -\sigma c_{t} - \phi n_{t} - w_{t} + a_{t} - \alpha n_{t} + \log(1-\alpha)
\\
&=  -\sigma y_{t} - \phi n_{t} - w_{t} + a_{t} - \alpha n_{t} + \log(1-\alpha)
\\
&= -\sigma y_{t} - n_{t} (\phi + \alpha)  - w_{t} + a_{t} + \log(1-\alpha)
\\
&= -\sigma y_{t} + \left(  \frac{a_{t} - y_{t}}{1-\alpha}  \right) (\phi + \alpha)  - w_{t} + a_{t} + \log(1-\alpha)
\\
&= - \sigma y_{t} - \frac{\alpha y_{t}}{1 - \alpha} + \frac{\alpha a_{t}}{1 - \alpha} - \frac{\phi y_{t}}{1 - \alpha} + \frac{\phi a_{t}}{1 - \alpha} - a_{t} + \log(1-\alpha)
\\ \\
\mu_{t} &= - \left( \sigma + \frac{\phi + \alpha}{1-\alpha} \right) y_{t} + \left ( 1 + \frac{\phi + \alpha}{1-\alpha} \right ) a_{t} + \log(1-\alpha)
\end{align*}
$$

Which differs from the flexible prices case simply by the $y_t$, which is $y_{t}^n = \psi_{ya}a_{t} + \psi_{y}^\mu$ under flexible prices. Put simply, there is a difference between the average markup and the realized markup, which is defined as the **output gap** $\tilde y_{t} \equiv y_{t} - y_{t}^n$:

$$
\mu_{t} - \mu = - \left ( \sigma + \frac{\phi + \alpha}{1-\alpha} \right ) \tilde y_{t}
$$

Why does markup decrease in output? This is because increased output induces higher wages, and thus consumption and real wage to the labor supply equilibrium. At the same time, the marginal cost will increase - for the same reason, and also due to decreasing returns to labor ($\alpha>0$). An positive shock to technology increases the markup for any level of output by directly reducing marginal costs. By subtracting the average mark up to output, we obtain the **output gap** $\tilde y_t \equiv y_t - y_t^n$. This allows to rewrite the equilibrium condition as a zero output gap condition in expectation.

$$
\begin{align*}
\mathbb{E}_{t-1} [ \tilde{y}_t] &= 0 \\
\implies \mathbb{E}_{t-1}[y_{t}] &= \mathbb{E}_{t-1}[y_{t}^n] \\
&= \psi_{ya}\rho_{a} a_{t-1} + \psi_{y}^\mu
\end{align*}
$$

Output is in equilibrium at:

$$
\begin{align*}
y_{t} &= \mathbb{E}_{t-1}[y_{t}] + (y_{t} - \mathbb{E}_{t-1}[y_{t}]) \\
&= \mathbb{E}_{t-1}[y_{t}^n] + \xi_{t}^y \\
&= \psi_{ya}\rho_{a}a_{t-1} + \psi_{y}^\mu + \xi_{t}^y
\end{align*}
$$

where $\xi_{t}^y = y_{t} - \mathbb{E}_{t-1}[y_{t}]$ is "innovation" in output. This equilibrium condition can be used to determine output, prices, and other variables. If gap is 0, the expected output attains its natural level (in expectation). This can be determined by its (expected) equation (it is always possible to write down the realized level of output as the sum of the expectation plus to the "surprise" or innovation, as a sort of forecast error). In the resulting equilibrium, price level is predetermined:

$$
\begin{align*}
p_{t} &= \mathbb{E}_{t-1}[m_{t}] - \mathbb{E}_{t-1}[y_{t}] \\
&= \mathbb{E}_{t-1}[m_{t}] - \psi_{ya} \rho_{a} a_{t-1} - \psi_{y}^\mu
\end{align*}
$$

In open contrast to the classical model, monetary policy is not neutral through its unanticipated component $\xi_t^m$, which affects output. This non-neutrality has two dimensions: on the exogenous end, monetary policy shock affects output ($\epsilon_{t}^m$); as for the endogenous component, monetary policy will *also* an effect of output, by the affecting choice of $\phi_a$ (defining such parameter is like allowing for the central bank to react to technology shocks systematically). This is part of the endogenous component of the rule of monetary policy. Therefore, technology shocks affect output in two ways: through monetary policy, and by the marginal cost, but in lag $\psi_{ya} \rho_a a_{t-1}$. To see this, consider a money supply rule such as

$$
m_{t} = \phi_{z} z_{t-1} + \phi_{a} \epsilon_{t}^a + \epsilon_{t}^m
$$

such that $\xi_{t}^m = \phi_{a} \epsilon_{t}^a + \epsilon_{t}^m$. The output gap is affected by the exogenous monetary shock:

$$
\begin{align*}
y_{t} &= \psi_{t}^\mu + \psi_{ya} \rho_{a} a_{t-1} + \phi_{a} \epsilon_{t}^a + \epsilon_{t}^m
\\
\tilde{y}_{t} &= \psi_{t}^\mu + \psi_{ya} \rho_{a} a_{t-1} + \phi_{a} \epsilon_{t}^a + \epsilon_{t}^m - \psi_{ya}a_{t} - \psi_{y}^\mu
\\
&= (\phi_{a} - \psi_{ya} ) \epsilon_{t}^a + \epsilon_{t}^m
\end{align*}
$$

In this model, monetary policy is no longer neutral, finally accommodating empirical evidence. However, it is not such in a very trivial way: monetary shocks only have contemporaneous effects and no persistent effects on output. However, data suggest that the effect of monetary shocks on output *is* persistent. Since price stickyness has been introduced as lasting for one period only, monetary policy cannot be persistent, as it goes back to the flexible prices results after only one period (other shocks being absent). Another limitation of this model is that inflation has no welfare costs, due to the fact that there are no relative price distortions (all firms adjust samely). In what follows, we'll consider a model with staggered price setting: at each point in time, only a fraction of firms will adjust prices.

Last, note that with sticky prices the Friedman rule does not hold. The  can influence output, and thus will attempt to make the outcome as close as possible as the flexible price equilibrium. This can be done by choosing a rule with $\phi_a=\psi_{ya}$, and no monetary policy shocks as these would cancel out. That would be the optimal policy in such scenario. In that case, the output gap would always be at 0, and the  would replicate the flexible price equilibrium. However, it is no longer an efficient equilibrium due to the monopolistic competition assumption.

<div style="page-break-after: always;"></div>

## The Basic New Keynesian Model

This section will introduce **price staggering**, referring to a pricing environment where only a random fraction of firms adjusts prices at every period. This is motivated by the microeconomic evidence previously discussed. As for the rest, continue assuming competitive markets. The New Keynesian model, derived from the previous assumption, is sometimes referred to as the **Three-Equation model** since it is indeed described by three equations:

$$
\begin{cases} \pi_t &= \beta\mathbb{E}_t[\pi_{t+1}] + \kappa \tilde y_t
\\
\tilde y_t &= - \frac{1}{\sigma} (i_t - \mathbb{E}_t[\pi_{t+1}] - r_t^n) + \mathbb{E}_t [\tilde y_{y+1}]
\\
i_t &= \rho + \phi_\pi \pi_t + \phi_y \hat y_t + v_t
\end{cases}
$$

These are referred to as the New Keynesian Phillips Curve, Dynamics IS Equation, and Monetary Policy Rule respectively. The policy rule can vary depending on the model specifications.

In this model, it will be explained that the identity between realized and desired markups holds only in the zero inflation steady state, not in every steady state. Whenever the firms markup is, on average too low relative to desired markup, they will steadily increase prices when given the opportunity to do so, but they will be able to do so only occasionally. Inflation will thus be driven by the tension between the realized and desired markup.

Household preferences and budget constraint are the same as before (without the cash-in-advance constraint), with optimality conditions:

$$
\begin{cases}
- \frac{U_{n,t}}{U_{c,t}} = \frac{W_{t}}{P_{t}} \\
Q_{t} = \beta \mathbb{E}_{t} \left[  \frac{U_{c,t+1}}{U_{c,t}} \frac{P_{t}}{P_{t+1}}  \right]
\end{cases}
$$

In addition to the optimal allocation of expenditure, compute the optimal consumption, labor supply, and money demand, based on the usual optimality conditions as derived in the classical model. We add an exogenous preference shock to the utility function of the households, modeled as an exogenous stochastic process $z_{t} \equiv \log Z_{t}$ such that $z_{t} = \rho_{z} z_{t-1} + \epsilon_{t}^z$, and a money demand shifter $\Xi_{t} \equiv e^{\xi_{t}}$:

$$
U(C_{t},N_{t}) =
\begin{cases}
\left( \frac{C_{t}^{1-\sigma}-1}{1-\sigma} - \frac{N_{t}^{1+\phi}}{1+\phi} + \Xi_{t}^\sigma \frac{L_{t}^{1-\sigma}-1}{1-\sigma} \right) Z_{t} & \sigma\neq{1} \\
\left( \log(C_{t}) - \frac{N_{t}^{1+\phi}}{1+\phi} + \Xi_{t}^\sigma \log(L_{t}) \right) Z_{t} & \sigma={1}
\end{cases}
$$

Note that the assumption of separable real balances is still in place, ruling out any impact of $L$ on $-\frac{U_{n,t}}{U_{c,t}}$. Finally, given the CRRA specification that is chosen, these optimality conditions can expressed explicitly as:
$$
\begin{cases}
U_{c,t} &= C_{t}^{-\sigma} Z_{t} \\
- U_{n,t} &= N_{t}^\phi Z_{t} \\
U_{l,t} &= \Xi_{t}^\sigma L_{t}^{-\sigma} Z_{t}
\end{cases}
$$
leading to the implied optimality conditions:

$$
\begin{cases}
\frac{W_{t}}{P_{t}} &= C_{t}^\sigma N_{t}^\phi \\
Q_{t} &= \beta \mathbb{E}_{t} \left [ \left ( \frac{C_{t+1}}{C_{t}} \right )^{-\sigma} \frac{Z_{t+1}}{Z_{t}} \frac{P_{t}}{P_{t+1}} \right ] \\
L_{t} &= C_{t} (1 - e^{-i_{t}})^{- \frac{1}{\sigma}} \Xi_{t}
\end{cases}
$$

and their log-linear counterparts:

$$
\begin{cases}
w_{t} - p_{t} = \sigma c_{t} + \phi n_{t} \\
c_{t} = \mathbb{E}_{t} [c_{t+1}] - \frac{1}{\sigma} (i_{t} - \mathbb{E}_{t}[\pi_{t+1}] - \rho ) + \frac{1}{\sigma} (1-\rho_{z})z_{t}
\end{cases}
$$

where the second condition can be derived by taking a first order approximation around a steady state with constant growth and inflation, recalling that in such steady state $i=\rho + \pi + \sigma y$, and rewriting the consumer's Euler equation as $1 = \mathbb{E}_{t} [ \exp\{ i_{t} - \sigma\Delta c_{t+1} - \pi_{t+1} - \rho + \Delta x_{t+1} \}]$:

$$
\begin{align*}
1 &= \mathbb{E}_t[\exp[i_t - \sigma \Delta c_{t+1} - \pi_{t+1} - \rho + \Delta x_{t+1}]] \\
&\approx \mathbb{E}_t[1 + i_t - \sigma \Delta c_{t+1} - \pi_{t+1} - \rho + \Delta x_{t+1}] \\
&\approx 1 + \mathbb{E}_t[i_t] - \mathbb{E}_t[\sigma \Delta c_{t+1}] - \mathbb{E}_t[\pi_{t+1}] - \mathbb{E}_t[\rho] + \mathbb{E}_t[\Delta x_{t+1}] \\
0 &\approx i_t - \sigma \mathbb{E}_t[\Delta c_{t+1}] - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[\Delta x_{t+1}] \\
\sigma \mathbb{E}_t[\Delta c_{t+1}] &\approx i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[\Delta x_{t+1}] \\
\mathbb{E}_t[\Delta c_{t+1}] &\approx \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[\Delta x_{t+1}]) \\
\mathbb{E}_t[c_{t+1} - c_t] &\approx \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[x_{t+1} - x_t]) \\
\mathbb{E}_t[c_{t+1}] - c_t &\approx \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[x_{t+1}] - x_t) \\
c_t &\approx \mathbb{E}_t[c_{t+1}] - \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho + \mathbb{E}_t[x_{t+1}] - x_t) \\
c_t &\approx \mathbb{E}_t[c_{t+1}] - \frac{1}{\sigma}(i_t - \mathbb{E}_t[\pi_{t+1}] - \rho - (1-\rho_x) x_t)
\end{align*}
$$

^9b6ba8

which offers an alternative (but very similar) derivation to the same Equation as [[#^4f3277]] . 

With staggered pricing adjustment, an index of **price stickiness** must be introduced: this is denoted as $\theta \in [0,1]$, so that $1-\theta$ is the probability that a firm adjusts its prices. The implied average price duration is thus equal to 

$$
1(1-\theta) + 2\theta(1-\theta) + 3\theta^2(1-\theta) + \dots \quad = \quad \sum_{j=0}^\infty j \theta^j(1-\theta) \quad = \quad \frac{1}{1-\theta}
$$

Consider the price level dynamics with staggered prices.

$$
\begin{align*}
P_{t} &= \left [ \int_{0}^1 P_{t}(i)^{1-\epsilon} \,di \right ]^{\frac{1}{1-\epsilon}}
\\
&= \left [ \int_{i \in \Theta_{t}} P_{t}(i)^{1-\epsilon} \,di + \int_{i \not\in \Theta_{t}} P_{t}(i)^{1-\epsilon} \,di \right ]^{\frac{1}{1-\epsilon}}
\\
&= \left [ \int_{i \in \Theta_{t}} P_{t}(i)^{1-\epsilon} \,di + \int_{i \not\in \Theta_{t}} (P^*_{t})^{1-\epsilon} \,di \right ]^{\frac{1}{1-\epsilon}}
\\
&= \left [ \theta \left( \frac{1}{\theta} \int_{i \in \Theta_{t}} P_{t}(i)^{1-\epsilon} \,di \right) + \int_{i \not\in \Theta_{t}} (P^*_{t})^{1-\epsilon} \,di \right ]^{\frac{1}{1-\epsilon}}
\\
&= \left [ \theta \left( \int_{0}^1 P_{t}(i)^{1-\epsilon} \,di \right) + \int_{i \not\in \Theta_{t}} (P^*_{t})^{1-\epsilon} \,di \right ]^{\frac{1}{1-\epsilon}}
\\
&= \left [ \theta \left( P_{t-1} \right)^{1-\epsilon}  + (1-\theta) (P^*_{t})^{1-\epsilon} \right ]^{\frac{1}{1-\epsilon}}
\end{align*}
$$

Assuming a zero-inflation steady state and log-linearizing thereby, the price level follows the adjustment rule

$$
\begin{align*}
\pi_{t} &= (1-\theta)(p_{t}^* - p_{t-1})
\\
p_t &= \theta p _{t-1} + (1 - \theta)p_t^*
\end{align*}
$$

which requires to find $p_t^*$ in the first place. This can be found from the firm's optimality conditions, and is derived from the discounted sum of future profits in the firm's objective function (conditional on the price remaining the same in the next $k$ period — hence the factor $\theta^k$ in the sum). This calculation is performed in the following paragraphs.

> [!focus]- Positive Inflation Steady State
> Reformulate the firm problem so as to account for a positive inflation steady state:
>
> $$
> \max_{B_{t}^*(i)} \mathbb{E}_{t} \sum_{k=0}^\infty \theta^j \Lambda_{t,t+k} \left [ Y_{t+k}(i) P^*_{t}(i) \Gamma^{k\omega} - \mathcal{C}(Y_{t+k}) \right ]
> $$
> where $\Gamma$ denotes the steady state level of inflation and $\omega$ is a parameter denoting the indexation intensity (0 to 1) for firms that do not reoptimize prices over the current period. The problem solves for:
> $$\frac{P_{t}^*}{P_{t}} = \mathcal{M} \frac { \mathbb{E}_{t} \left [ \sum_{k=0}^\infty \theta^k \Lambda_{t,t+k} Y_{t+k} \left(\frac{P_{t+k}}{P_{t}}\right)^{\epsilon+1} \Gamma^{-k\omega\epsilon} \;\cdot\; \frac{\Psi_{t+k}(i)}{P_{t+k}} \right] } { \mathbb{E}_{t} \sum_{k=0}^\infty \left[ \theta^k \Lambda_{t,t+k} Y_{t+k} \left(\frac{P_{t+k}}{P_{t}}\right)^{\epsilon+1} \Gamma^{-k\omega\epsilon} \right] }$$
> And the price setting dynamics are:
>
> $$
> P_{t}^{1-\epsilon} = (1-\theta) (P^*_{t})^{1-\epsilon} + \theta P_{t-1}^{1-\epsilon} \Gamma^{\omega(1-\epsilon)}
> $$
>
> This implies the following relation, in levels and log deviations:
> 
> $$
> \begin{align*}
> \frac{P^*}{P} &= \left(  \frac{1-\theta}{1 - \theta\Gamma^{(1-\omega)(\epsilon-1)}} \right)^{\frac{1}{\epsilon-1}} \\
> \\
> \hat{\pi}_{t} &= \left(  \frac{1 - \theta\Gamma^{(1-\omega)(\epsilon-1)}} {\theta\Gamma^{(1-\omega)(\epsilon-1)}} \right)
> \end{align*}
> $$
>
> which implies that inflation is less sensitive to changes in the re-optimizing price as steady-state inflation rises.  This effect reflects the fact that, with positive steady-state inflation, firms which reset prices have higher prices than others and receive a smaller share of expenditures, thereby reducing the sensitivity of inflation to these price changes.  Indexation of prices works to offset this effect however, with full indexation completely restoring the usual relationship between reset prices and inflation.
> 
> Here is a complete derivation of the equation:
>
> $$
> \begin{align*}
> P_{t}^{1-\epsilon} &= \int_{0}^{1} P_{t}(i)^{1-\epsilon} \, di \\ &= \sum_{j=0}^{\infty} (1-\theta)\theta^j \left[(P^*) \left(\Gamma^\omega\right)^j\right]^{1-\epsilon} \\
> &= (1-\theta) (P^*)^{1-\epsilon} \sum_{j=0}^{\infty} \left(\theta \Gamma^{\omega(1-\epsilon)}\right)^j \\ &= (1-\theta) (P^*)^{1-\epsilon} \frac{1}{1 - \theta \Gamma^{\omega(1-\epsilon)}} \\ &= (1-\theta) \left((P^*)/\overline{P}\right)^{1-\epsilon} \overline{P}^{1-\epsilon} \frac{1}{1 - \theta \Gamma^{\omega(1-\epsilon)}} \\ &= (1-\theta) \left((P^*)/\overline{P}\right)^{1-\epsilon} \overline{P}^{1-\epsilon} \frac{1}{1 - \theta \Gamma^{\omega(1-\epsilon)}} \\ 1 &= (1-\theta) \left((P^*)/\overline{P}\right)^{1-\epsilon} \frac{1}{1 - \theta \Gamma^{\omega(1-\epsilon)}} \\ \left((P^*)/\overline{P}\right)^{1-\epsilon} &= \frac{1 - \theta \Gamma^{\omega(1-\epsilon)}}{1 - \theta} \\ (P^*)/\overline{P} &= \left(\frac{1 - \theta \Gamma^{\omega(1-\epsilon)}}{1 - \theta}\right)^{\frac{1}{1-\theta}} \\ &= \left(\frac{1 - \theta \Gamma^{-\omega(\epsilon-1)}}{1 - \theta}\right)^{-\frac{1}{\epsilon-1}} \\ (P^*)/\overline{P} &= \left(\frac{1 - \theta}{1 - \theta \Gamma^{-\omega(\epsilon-1)}}\right)^{\frac{1}{\epsilon-1}}
> \end{align*}
> $$
>
> The log deviations are obtained as follows. Denote $x \equiv \Gamma^{(1-\omega)(\epsilon-1)} \frac{P^*}{P}$:
>  
> $$
> \begin{align*}
> x &= \Bigl(\tfrac{1-\theta}{\,1-\theta\,x\,}\Bigr)^{\!1/(\epsilon-1)}
> \ln\frac{P^*}{P}\\
> &= \frac{1}{\epsilon-1}\bigl[\ln(1-\theta)-\ln(1-\theta x)\bigr] \\
> \widehat\pi_t
> &\equiv \ln\frac{P^*}{P} \;-\; 0
> = \frac{1}{\epsilon-1}\bigl[\ln(1-\theta)-\ln(1-\theta x)\bigr], \\
> &= -\,\frac{1}{\epsilon-1}\,\ln(1-\theta x)
> \quad(\text{drop constant}), \\
> \exp\bigl[-(\epsilon-1)\widehat\pi_t\bigr]
> &= 1-\theta x, \\
> \frac{1-\theta x}{\theta x}
> &= \exp\bigl[-(\epsilon-1)\widehat\pi_t\bigr], \\
> \widehat\pi_t
> &= \frac{\,1-\theta\,x\,}{\theta\,x}
> \;=\;\frac{\,1-\theta\,\Gamma^{(1-\omega)(\epsilon-1)}\,}{\,\theta\,\Gamma^{(1-\omega)(\epsilon-1)}\,}
> \end{align*}
> $$

Consider the firm's objective function under Calvo pricing. Let $\Xi_t(i)$ denote the period $s \leq t$ when $P_t(i)$ was set. Present discounted value of a firm reoptimizing its price in period $t$:

$$
\sum_{k=0}^\infty \mathbb{E}_{t-1} \left [ \Lambda_{t,t+k} D_{t+k}(i) \right ] = \sum_{k=0}^\infty \theta^k \mathbb{E}_{t} \left [ \Lambda_{t,t+k} D_{t+k}(i) \; | \; \Xi_{t+k}(i) = t \right ]  +  \sum_{k=0}^\infty (1-\theta)^k \mathbb{E}_{t} \left [ \Lambda_{t,t+k} D_{t+k}(i) \; | \; \Xi_{t+k}(i) > t \right ]
$$

Note that the second sum on the right-hand side cannot be affected by the firm at period $t$. Therefore, the presently relevant part for pricing decision is just:

$$
\sum_{k=0}^\infty \mathbb{E}_{t-1} \left [ \Lambda_{t,t+k} D_{t+k}(i) \right ] = \sum_{k=0}^\infty \theta^k \mathbb{E}_{t} \left [ \Lambda_{t,t+k} D_{t+k}(i) \; | \; \Xi_{t+k}(i) = t \right ]
$$

where the usual $D_{t+k|t} \equiv \frac{1}{P_{t+k}} [P_{t}^* Y_{t+k|t} - \mathcal{C}_{t+k}(Y_{t+k|t})]$. It follows the usual optimality condition:

$$
\sum_{k=0}^\infty \theta^k \mathbb{E}_{t} \left [ \Lambda_{t,t+k} \frac{ Y_{t+k|t} }{P_{t+k}} \left( P_{t}^* - \mathcal{M} \Psi_{t+k|t} \right) \right ] = 0
$$

At a zero-inflation steady state, $\frac{P_{t+k}}{\Psi_{t+k|t}} = \frac{P_{t+k}}{\Psi_{t+k}} \equiv \mathcal{M}^{(0)}$, implying that the average markup in a steady state with inflation 0 is constant, since all firms have the constant price, quantity, and marginal costs in a steady state (the derivation is similar to [[#^93467a]]). Moreover, due to zero inflation, $\frac{P_{t}^*}{P_{t+k}} = 1$ and by steady state it holds that $Y_{t+k|t} = Y$ and $\Lambda_{t,t+k} = \beta^k$. Then, the previous condition can be simplified to:

$$
\sum_{k=0}^\infty (\beta\theta)^k \left( 1 - \frac{\mathcal{M}}{\mathcal{M}^{(0)}} \right ) = 0 \qquad \iff \qquad \mathcal{M}^{(0)} = \mathcal{M}
$$

In what follows, log-linearize the condition around the perfect foresight zero-inflation steady state. Put simply, in a zero-inflation steady state, the average markup equals the desired markup, and thus firms are satisfied and keep prices unchanged. The log-linearized counterpart is thus:

$$
\begin{align*}
\sum_{k=0}^\infty \mathbb{E}_{t} \left[ (\theta\beta)^k \frac{\mathcal{M}_{t+k}(i)}{\mathcal{M}^{(\gamma)} } \right] &= \sum_{k=0}^\infty (\theta\beta)^k
\\
\sum_{k=0}^\infty \mathbb{E}_{t} \left[ (\theta\beta)^k \frac{\mathcal{M}_{t+k}(i)}{\mathcal{M}^{(0)} } \right] &= \frac{1}{1-\theta\beta}
\\
\log \left\{ (1-\beta\theta) \sum_{k=0}^\infty \mathbb{E}_{t} \left[ (\theta\beta)^k \frac{\mathcal{M}_{t+k}(i)}{\mathcal{M}^{(0)} } \right] \right\} &= \log(1)
\end{align*}
$$

where the second line follows assuming a zero-inflation steady state and the solution for a convergent geometric series. Performing the usual [[Advanced Macroeconomics III (Galì)#^6613ea|log-linear approximation]]:

$$
\begin{align*}
(1-\beta\theta) \sum_{k=0}^\infty \mathbb{E}_{t} \left[ (\theta\beta)^k (\mu_{t+k}(i) - \mu^{(0)} ) \right] &= 0
\\
(1-\beta\theta) \sum_{k=0}^\infty \mathbb{E}_{t} \left[ (\theta\beta)^k (p_{t+k}^* - \psi_{t+k} ) \right] &= \mu^{(0)}
\\
p^*_t &= \mu + (1-\beta\theta) \sum_{k=0}^\infty (\beta\theta)^k \mathbb{E}_t [ \psi_{t+k|t}]
\end{align*}
$$

Note that the (log) marginal cost for an individual firm that last set its price in period $t$ is given by:

$$
\begin{align*}
\psi_{t+k \,|\, t} &= w_{t+k} - mpn_{t+k\,|\,t}
\\
&= w_{t+k} - a_{t+k} + \alpha n_{t+k \,|\, t} + \log(1-\alpha)
\end{align*}
$$

Since $\psi_{t} \equiv \int_{0}^1 \psi_{t}(i) \,di$, it is possible to describe the average marginal cost of the entire economy by summing over firms that last updated their price at $t-k$ for all $k \in \mathbb{N}$:

$$
\begin{align*}
\psi_{t} &= (1-\theta) \sum_{k=0}^\infty \theta^k \psi_{t \,|\, t-k}
\\
&= w_{t} - a_{t} - \alpha n_{t} + \log(1-\alpha)
\end{align*}
$$

Leading to the following relationship between firm-specific and economy-wide marginal costs:

$$
\begin{align*}
\psi_{t+k \,|\, t} &= \psi_{t+k} + \alpha(n_{t+k \,|\, t} - n_{t+k})
\\
&= \psi_{t+k} + \frac{\alpha}{1-\alpha} (y_{t+k \,|\, t} - y_{t+k})
\\
&= \psi_{t+k} + \frac{\alpha \epsilon}{1-\alpha} (p_{t}^* - p_{t+k})
\end{align*}
$$

^9c8ae2


The previous results can be combined so as to define a new object, the **markup gap**, which is exploited to describe the inflation environment. Note that, now, the marginal cost is firm-specific (unless the technology is linear): in fact, firms have different prices, thus sell different quantities, ultimately incurring different marginal cost.
In what follows, consider linear technology for simplicity. Linear technology is modelled by assuming $\alpha = 0$, so that $\psi_{t} = w_{t} - a_{t}$.

Rewrite equation the previous equation so as to emphasize the role of the markup gap on inflation. Recall that, in the special linear case where $\alpha=0$, it holds that $\psi_{t+k \,|\, t} = \psi_{t+k}$ (this can be easily seen from [[#^9c8ae2]]). The **markup gap** is defined as $\hat{\mu}_{t}  \equiv \mu_{t} - \mu$, and the actual markup is $\mu_{t}\equiv p_{t} - \psi_{t}$. Combining:

$$
\begin{align*}
p^*_t &= \mu + (1-\beta\theta) \sum_{k=0}^\infty (\beta\theta)^k \mathbb{E}_t [ \psi_{t+k|t}]
\\
p^*_t &= \mu + (1-\beta\theta) \sum_{k=0}^\infty (\beta\theta)^k \mathbb{E}_t \left[ \psi_{t+k} + \tfrac{\alpha \epsilon}{1-\alpha} (p_{t}^* - p_{t+k}) \right]
\\
&=\mu+(1-\beta\theta)\sum_{k=0}^\infty(\beta\theta)^k\mathbb{E}_t\bigl[p_{t+k}-\mu_{t+k}+\tfrac{\alpha\epsilon}{1-\alpha}(p^*_t-p_{t+k})\bigr]\\
%%
&=\mu+(1-\beta\theta)\sum_{k=0}^\infty(\beta\theta)^k\mathbb{E}_t\Bigl[\tfrac{\alpha\epsilon}{1-\alpha}p^*_t+\Bigl(1-\tfrac{\alpha\epsilon}{1-\alpha}\Bigr)p_{t+k}-\mu_{t+k}\Bigr]\\
%%
&=\mu+(1-\beta\theta)\Bigl[\tfrac{\alpha\epsilon}{1-\alpha}p^*_t\sum_{k=0}^\infty(\beta\theta)^k+\Bigl(1-\tfrac{\alpha\epsilon}{1-\alpha}\Bigr)\sum_{k=0}^\infty(\beta\theta)^k\mathbb{E}_t[p_{t+k}]-\sum_{k=0}^\infty(\beta\theta)^k\mathbb{E}_t[\mu_{t+k}]\Bigr]\\
%%
&=\mu+\tfrac{\alpha\epsilon}{1-\alpha}p^*_t+(1-\beta\theta)\Bigl(1-\tfrac{\alpha\epsilon}{1-\alpha}\Bigr)\sum_{k=0}^\infty(\beta\theta)^k\mathbb{E}_t[p_{t+k}]-(1-\beta\theta)\sum_{k=0}^\infty(\beta\theta)^k\mathbb{E}_t[\mu_{t+k}]\\
%%
\Bigl(\; \underbrace{ 1-\tfrac{\alpha\epsilon}{1-\alpha}}_{\equiv\frac{1}{\Theta}} \;\Bigr) p^*_t
&=\mu+(1-\beta\theta)\Bigl(1-\tfrac{\alpha\epsilon}{1-\alpha}\Bigr)\sum_{k=0}^\infty(\beta\theta)^k\mathbb{E}_t[p_{t+k}]-(1-\beta\theta)\sum_{k=0}^\infty(\beta\theta)^k\mathbb{E}_t[\mu_{t+k}]\\
%% \\
\frac{p^*_t}{\Theta}
&= \mu + \frac{(1-\beta\theta)}{\Theta} \sum_{k=0}^\infty(\beta\theta)^k \mathbb{E}_t[p_{t+k}]
- (1-\beta\theta)\sum_{k=0}^\infty(\beta\theta)^k \mathbb{E}_t[\mu_{t+k}] \\
%%
p^*_{t} &= \Theta\mu + (1-\beta\theta)\sum_{k=0}^\infty(\beta\theta)^k 
\mathbb{E}_t\left[ p_{t+k} - \Theta \mu_{t+k} \right]
\\
&= (1-\beta\theta)\sum_{k=0}^\infty(\beta\theta)^k 
\mathbb{E}_t\left[ p_{t+k} - \Theta \hat{\mu}_{t+k} \right]
\end{align*}
$$

with $\Theta = \frac{1-\alpha}{1-\alpha + \alpha\epsilon}$. Note that the reoptimization price can also be written in a recursive form. In particular:

$$
\begin{align*}
p_t^* &= (1-\beta\theta)\sum_{k=0}^\infty(\beta\theta)^k \mathbb{E}_t\left[ p_{t+k} - \Theta \hat{\mu}_{t+k} \right]
\\
\mathbb{E}_t[p_{t+1}^*] &= \mathbb{E}_t\left[ (1-\beta\theta)\sum_{j=0}^\infty(\beta\theta)^j \mathbb{E}_{t+1}\left[ p_{t+1+j} - \Theta \hat{\mu}_{t+1+j} \right] \right] = \frac{1-\beta\theta}{\beta\theta}\sum_{k=1}^\infty(\beta\theta)^{k} \mathbb{E}_t\left[ p_{t+k} - \Theta \hat{\mu}_{t+k} \right]
\\
\\
\implies p_t^* &= (1-\beta\theta) \left[ p_{t} - \Theta \hat{\mu}_{t} \right] + (1-\beta\theta) \sum_{k=1}^\infty(\beta\theta)^k \mathbb{E}_t\left[ p_{t+k} - \Theta \hat{\mu}_{t+k} \right]
\\
&= (1-\beta\theta) \left[ p_{t} - \Theta \hat{\mu}_{t} \right] + (1-\beta\theta) \frac{\beta\theta}{1 - \beta\theta} \mathbb{E}_{t} [p_{t+1}]
\end{align*}
$$

Leading to:

$$
p_{t}^* = (1-\beta\theta) \left[ p_{t} - \Theta \hat{\mu}_{t} \right] + \beta\theta \mathbb{E}_{t} [p_{t+1}]
$$

Finally, combine this results with the equation for the price level dynamics, $\pi_{t} = (1-\theta)(p_{t}^* - p_{t-1})$ (and similarly, $p_t^* = p_{t-1} + \frac{\pi_t}{1-\theta}$). Forwarding one period, note that $\mathbb{E}_t[p_{t+1}^*] = p_t + \frac{\mathbb{E}_t[\pi_{t+1}]}{1-\theta}$. Plugging in the previous equation and exploiting the fact that $p_t^*$ is equal to $p_{t-1} + \frac{\pi_t}{1-\theta}$:

$$
\begin{align*} p_{t-1} + \frac{\pi_t}{1-\theta} &= (1-\beta\theta) \left[ p_{t} - \Theta \hat{\mu}_{t} \right] + \beta\theta \left[ p_t + \frac{\mathbb{E}_t[\pi_{t+1}]}{1-\theta} \right] \\ p_{t-1} + \frac{\pi_t}{1-\theta} &= (1-\beta\theta) p_{t} - (1-\beta\theta)\Theta \hat{\mu}_{t} + \beta\theta p_t + \frac{\beta\theta}{1-\theta} \mathbb{E}_t[\pi_{t+1}] \\ p_{t-1} + \frac{\pi_t}{1-\theta} &= p_t - (1-\beta\theta)\Theta \hat{\mu}_{t} + \frac{\beta\theta}{1-\theta} \mathbb{E}_t[\pi_{t+1}]
\\
\frac{\pi_t}{1-\theta} &= p_t - p_{t-1} - (1-\beta\theta)\Theta \hat{\mu}_{t} + \frac{\beta\theta}{1-\theta} \mathbb{E}_t[\pi_{t+1}]
\\
\frac{\pi_t}{1-\theta} &= \pi_t - (1-\beta\theta)\Theta \hat{\mu}_{t} + \frac{\beta\theta}{1-\theta} \mathbb{E}_t[\pi_{t+1}]
\\
\frac{\pi_t}{1-\theta} - \pi_t &= - (1-\beta\theta)\Theta \hat{\mu}_{t} + \frac{\beta\theta}{1-\theta} \mathbb{E}_t[\pi_{t+1}]
\\
\frac{\theta}{1-\theta}\pi_t &= - (1-\beta\theta)\Theta \hat{\mu}_{t} + \frac{\beta\theta}{1-\theta} \mathbb{E}_t[\pi_{t+1}]
\\
\pi_t &= - \frac{(1-\theta)(1-\beta\theta)}{\theta}\Theta \hat{\mu}_{t} + \frac{\beta\theta}{\theta} \mathbb{E}_t[\pi_{t+1}] \\ \pi_t &= \beta\mathbb{E}_t[\pi_{t+1}] - \frac{(1-\theta)(1-\beta\theta)}{\theta}\Theta \hat{\mu}_{t}
\end{align*}
$$

which can be written more concisely by defining $\lambda=\frac{(1-\theta)(1-\beta\theta)}{\theta}\Theta$:

$$
\pi_t = \beta\mathbb{E}_t[\pi_{t+1}] - \lambda \hat{\mu}_{t}
$$

In order to derive the equation describing the entire inflationary environment, we simply assumed a specific behavior in optimal price-setting (Calvo pricing, i.e. firms can adjust prices with constant probability). No other assumption has been made about competitiveness of labor markets, stickiness of prices, openness or closedness, fiscal policy... This suggests that this equation is very general, and may hold in different environments. Intuitively, it simply states that inflation is the result of deviations of the realized markup in the economy from their desired markup. If the average markup is lower than the desired markup, prices will — on average — raise prices when they have the opportunity, eliciting positive inflation. This relationship is mediated, however, by the coefficient $\lambda$, which crucially depends (inversely) on price stickiness $\theta$. The stickier the prices, the smaller the fraction of firms that will readjust, and hence the smaller the change in inflation for any given markup gap. Moreover, the markup gap will be more persistent as it will adjust more slowly.

We conclude this section with a final remark on inflation at time $t$, which will not be directly used in the derivation of the NKPC, but is still very insightful. Note that the previous equation is a *recursive* formulation. In fact, the true equation would be obtained by iterating forward:

$$
\begin{align*}
\pi_t &= -\lambda \sum_{k=0}^\infty \beta^k \mathbb{E}[\mu_{t+k} - \mu] \\
\\
\pi_{t} &= -\lambda \sum_{k=0}^\infty \beta^k \mathbb{E}_{t}[\hat{\mu}_{t+k}]
\end{align*}
$$

which suggests that inflation depends also on expected future markup gaps, since firms realize that the price set today will persist for a possibly long period of time. Inflation depends on current **and** expected future markup gaps: in this sense, inflation is forward looking. Inflation is expressed as the discounted sum of current and expected future deviations of average markups from their desired level: thus, inflation will be positive when firms expect average markups to be below their desired level $\mu$.

>[!remark] Real Rigidities
>Note that $\lambda$ is decreasing in $\alpha$ and $\epsilon$. Let us try to come up with some intuition for this, putting ourselves into the position of a firm.
>
>With constant returns to scale, the marginal costs are independent on prices (as prices are the driver of demand). However, with decreasing returns, the marginal costs that a firm faces depend on the quantity being produced, and thus on the price. In other words, today's price also influences future marginal costs, and the firm takes this dependence into account when optimizing. If a firm increases the price assuming that the marginal cost will be higher, the price increase will be slightly less than in the context of constant returns, as the price itself lowers (or increases) the marginal costs. The effects of production technology on pricing dynamics are referred to as **real rigidities**.

### The New Keynesian Phillips Curve

The NKPC is normally expressed in terms of the output gap rather than markup gap. Recall two important results derived in the previous section:

$$
\begin{cases}
\mu_{t} &= - \left( \sigma + \frac{\phi + \alpha}{1-\alpha} \right) y_{t} + \left ( 1 + \frac{\phi + \alpha}{1-\alpha} \right ) a_{t} + \log(1-\alpha) 
\\
\mu &= - \left( \sigma + \frac{\phi + \alpha}{1-\alpha} \right) y_{t}^n + \left ( 1 + \frac{\phi + \alpha}{1-\alpha} \right ) a_{t} + \log(1-\alpha)
\end{cases}
\quad\implies\quad
\hat{\mu_{t}} = - \left ( \sigma + \frac{\phi + \alpha}{1-\alpha} \right ) \tilde y_{t}
$$

where $\tilde{y}_{t} \equiv y_{t} - y_{t}^n$ denotes the output gap.

>[!definition] New Keynesian Phillips Curve
>$$\pi_{t} = \beta \mathbb{E}_{t} [\pi_{t+1}] + \kappa \tilde{y}_{t}$$
>where $\kappa \equiv \left( \sigma + \frac{\phi+\alpha}{1-\alpha} \right) \lambda = \left( \sigma + \frac{\phi+\alpha}{1-\alpha} \right) \frac{(1-\theta)(1-\beta\theta)}{\theta}\Theta = \left( \sigma + \frac{\phi+\alpha}{1-\alpha} \right) \frac{(1-\theta)(1-\beta\theta)}{\theta} \frac{1-\alpha}{1-\alpha + \alpha\epsilon}$.

By iterating the NKPC forward:

$$
\pi_{t} = \kappa \sum_{k=0}^\infty \beta^k \mathbb{E}_{t}[\tilde{y}_{t+k}]
$$

implying that inflation is purely forward looking and there is no role for past inflation.

The previous, very general equation can be combined with model-specific equilibrium conditions (and thus with some additional assumptions) to find aggregate employment and other variables. The equation for the demand for labor can be transformed in terms of output, as in this model output is demand driven.
Focus on $\Delta_{p,t}$, take the first order Taylor expansion in equilibrium, and note that it is equal to 1 up to first order. Later on, we'll take second order Taylor expansions, which will involve the cross-sectional variance of the price of different firms. [[Advanced Macroeconomics III (Galì)#^b5b102|Price dispersion]] is important for computing the welfare costs of inflation, as the price ratio is a convex function: by Jensen's inequality, the mean of the function is larger than the function of the mean, so that price dispersion increases the value of the price ratio at that point. The larger the price dispersion, the greater the amount of labor required. This will, of course, lead to second-order welfare implications.

Inflation depends on the output gap, current and future. However, the reason for this is that the output gap is related to the markup gap. If output is higher than the natural level of output, then the average markup of the economy is below the desired markup. As we discussed, this leads to inflationary pressure.

The properties of the NK Phillips curve are, of course, pretty pleasing, but controversial. To begin with, it differs critically from the traditional Phillips curve. The **traditional Phillips curve** may be described in this typical formulation:

$$
\pi_t = \pi_{t-1} + \delta \hat y_t + u_t
$$

as in the traditional markup models from the 70s and 80s (where $\hat y_t$ is the detrended or cyclical component of output). Obviously, this equation was backward looking, as a function of the past. Past inflation plays a clear role in determining current inflation. In contrast, in th NKPC, the past is irrelevant and inflation is purely forward looking.

The second property is sometimes referred to as **Divine Coincidence**: according to the NK model, there is no tradeoff between output gap and inflation stabilization (once again in clear contrast with the traditional Phillips curve). The tradeoff seems to be gone: if the central bank stabilizes inflation, this would automatically stabilize the output gap (suppose at 0), and vice versa. This is a very powerful result. Suppose a central bank cares about the output gap. The gap is output minus the natural level of output, which is however not observable but purely counterfactual (it assumes flexible prices). How to address the output gap if this is not observable? This challenge is rescued by the Divine Coincidence: if inflation is stabilized — with inflation being naturally observed — then output gap will also be stabilized. More specifically, to completely close the output gap, it would enough (in the limit) to set inflation equal to 0 at all times.

Finally, as a conclusive comment: The difference between the NK and the traditional Phillips curve is that in the NK the notion of output gap is more precise, and theoretically grounded: it is exactly the gap between current output and the equilibrium output with flexible prices. Traditional output gap, very differently, usually referred to the detrended output $\hat y_t = y_t - f(t)$, which is usually current output minus some statistical function of time that captures low frequency movements in output. It is a purely statistical magnitude with no theoretical justification. This kind of measure is usually used in empirical versions of the Phillips curve, and many economists still use output gap referring to this object. To our purposes, however, it is worth noting that the value of these two different "output gaps" may be extremely different: the natural level of output responds to many shocks and may be very different from its smooth function over time. In Galì (2003), some comparison is offered, focusing on the 90s US economy: productivity growth was high, with an increase not only in ouput, but also in the natural level of output. Thus, the output gap was stable, while the traditional output gap was skyrocketing. To further support this idea, inflation was stable in the 90s, and not increasing, as the traditional Phillips curve should have required.
#### Empirical Evidence

What alternatives can be proposed to measure the NK Phillips curve? Using the markup gap and exploiting the fact that the markup gap is inversely related to the labor income share, that we directly observe, it is possible to obtain the desired measure.

>[!remark] The labor income share
>The labor income share evolves according to the technology fundamentals and the markup, but only if the previous assumptions on the production function are taken seriously. If firms don't pay workers the marginal product of labor, but less than it, the markup gap will be higher.
>
>Note that this line of reasoning hinges upon the assumption that the marginal product of labor is a truthful, meaningful economic object. Once the assumptions on the production function are modifies or relaxed, then, a jar is opened where other interpretations of the output gap become acceptable: such as **conflict inflation**, or a **CES production function** or other technological assumptions.

Under rational expectations, the error term in the expected and realized inflation should be orthogonal to such observable features. The only free variable is $\theta$, which can be pinned down by introducing some assumptions on $\alpha$ and $\epsilon$. The specific assumption is $\mu=1.1$ and $\alpha=0.175$, which pins down $\epsilon$. Moreover, the implied average duration $D$ is similar to the one empirically observed in EU and US. In the same paper, a new version of the NK Phillips curve is estimated, known as the **hybrid NK Phillips curve** or **augmented NK Phillips curve**:

$$
\pi_t = \gamma_b \pi_{t-1} + \gamma_f \beta \mathbb{E}[\pi_{t+1}] - \lambda(\mu_t - \mu)
$$
where some role is granted to past inflation. This can be generate if a fraction of firms adjust prices according to a rule of thumb which is based on previous inflation. Alternatively, through models with **price indexation**, where some random share of firms adjust optimally and some others adjust according to the rule of thumb (this turns out not to be a bad rule: it accounts for the fact that other firms *are* optimizing). These techniques have been critized due to weak instruments. As on the empirical side, a puzzle is related to missing deflation (Stock and Watson 2020), since during the Great Depression contradficts the traditional Phillips curve: output gap was low but inflation remained still despite rising unemployment.
### The Dynamic IS equation

In equilibrium, market clearing ensures that $c_t = y_t$. Combine the (log-linearized) Euler equation ([[#^9b6ba8]]) and goods market clearing:

$$
\begin{equation*}
y_{t} = \mathbb{E}_{t} [y_{t+1}] - \frac{1}{\sigma} (i_{t} - \mathbb{E}_{t}[\pi_{t+1}] - \rho ) + \frac{1}{\sigma} (1-\rho_{z})z_{t}
\end{equation*}
$$

^1d20a7

The New Keynesian Phillips curve is written in terms of the output gap; therefore, transform the Euler equation by subtracting the natural level of output from both the RHS and LHS. On the LHS, also the expected natural level of output is subtracted and added:

$$
\tilde{y}_{t} = \mathbb{E}_{t} [\tilde{y}_{t+1}] - \frac{1}{\sigma} (i_{t} - \mathbb{E}_{t}[\pi_{t+1}] - \rho ) + \frac{1}{\sigma} (1-\rho_{z})z_{t} + \mathbb{E}_{t}[\Delta y_{t+1}^n]
$$

Finally, move the middle term inside the expectation, and exploit the definition of $r_t^n \equiv \rho + \sigma \mathbb{E}_{t} [\Delta y_{t+1}^n] + (1-\rho_{z})z_{t}$. In the additional line, exploit the expression for $\Delta y_{t+1}^n = \Psi_{ya}(a_{t+1}-a_t)$, assuming equilibrium in expectation and assuming tha $a_t$ follows a AR(1) process:

$$
r^n_{t} = \rho - \sigma \psi_{ya} (1-\rho_{a}) a_{t} + (1- \rho_{z})z_{t}
$$

^6083fa

The $r_{t}^n$ is the natural interest rate that would prevail in equilibrium under flexible prices, which corresponds exactly to the real rate in the Classical model. How to know that this is the correct interpretation? On the one hand, it can be solved on equilibrium under flexible prices — as did in [[#Sticky Prices Evidence, Microfoundations, and Early Models|Chapter 2]] — and yield the same result (a "brute force" approach). Alternative and more simply, suppose prices were flexible and note that the output gap would be equal to 0: thus, $r_t^n$ would be equal to the real interest rate. This is a key argument in the design of monetary policy.

An important feature of the Dynamic IS equation is that it can be iterated forward making clear that the output gap is a forward looking variable, depending on current and future interest rates gaps — gaps between the interest rate and the natural rate of interest.

$$
\tilde{ y}_{t} = - \frac{1}{\sigma} \sum_{k=0}^\infty \mathbb{E}_{t} [ i_{t+k} -\pi_{t+1+k} - r_{t+k}^n]
$$

This implies that **the central bank can influence today's output gap by influencing either the interest rate today or expectation of future interests**. This plays a crucial role not only in theory, but in central banking practice, especially when an economy is operating around the zero lower bound.
### Equilibrium

Equilibria in the NK model can take different forms, depending on how the central bank conducts monetary policy. On top of that, monetary policy may involve more than one equation. For instance, if some rule for the money supply is also followed, two equations would be needed: given three endogenous variables and the previous two equations, we add another variable — the money supply — and thus need four equations for four unknowns. The additional equation would describe the equilibrium in the money market, and relating money supply to the money market $m_t - p_t = y_t - \eta i_t$.

> [!example] Money supply
> In this version, there is no reference to money. This is sometimes referred to as the **cashless version** of the NK model. An implication is that money demand shocks of the type $$m_t - p_t = y_t - \eta i_t + \zeta_t$$ are irrelevant. The idea is that the money demand shock leads the central bank to adjust the money supply 1-to-1 to the money demand shock, leaving all other variables unchanged: $$\Delta m_t = \pi_t + \Delta y_t - \eta \Delta i_t + \Delta \zeta_t$$Of course, this result depends on the fact that the central bank follows an interest rate rule, and not a money supply rule. The difference equation prescribes the money supply rule required in equilibrium to implement the same interest rule as before.

For our purposes, however, assume that the central bank follows an interest rule such as the **standard interest rate rule** (note that this is not yet the optimal rule, and rather it is a simple, realistic rule that we assume):

$$
i_t = \rho + \phi_\pi \pi_t + \phi_y \hat y_t + v_t
$$
where $v_t = \rho_{v} v_{t-1} + \epsilon_{t}$ is an exogenous monetary policy shock. Note that this is expressed in terms of output (namely, deviations of output from the SS). In contrast, we rewrite the sheer output deviations in terms of the output gap and endogenous shocks:

$$
\begin{align*}
i_{t} &= \rho + \phi_{\pi} \pi_{t} + \phi_{y}\hat{y}_{t} + v_{t} \\
&= \rho + \phi_{\pi} \pi_{t} + \phi_{t} (y_{t} - y^n_{t}) + \phi_{y}(y^n_{t} - y) + v_{t} \\
&= \rho + \phi_{\pi} \pi_{t} + \phi_{y} \tilde{y}_{t} + \phi_{t} \hat{y}_{t}^n + v_{t} \\
&= \rho + \phi_{\pi} \pi_{t} + \phi_{y}\tilde{y}_{t} + \phi_{y} \psi_{ya} a_{t} + v_{t}
\end{align*}
$$

where:

$$
\begin{align*}
\hat{y}_{t} &\equiv y_{t} - y \\
\hat{y}^n &\equiv y_{t}^n - y \\
v_t &= \rho_{v} v_{t-1} + \epsilon_{t}
\end{align*}
$$

It is now possible to solve the system of three difference equations with three endogenous variable (the nominal rate, inflation, and the output gap). Any solution to this system is a valid equilibrium.

This system is normally simplified by omitting the nominal rate rule. After combining the NKPC, the Dynamic IS curve, and a nominal rate rule, this can be rearranged in the [[Advanced Macroeconomics II#Canonical form|canonical representation]] of the equilibrium dynamics:

$$
\begin{bmatrix} \tilde y_t \\ \pi_t \end{bmatrix}
= \mathbf{A}_T\begin{bmatrix} \mathbb{E}_t [\tilde y_{t+1}] \\ \mathbb{E}_t [\tilde y_{t+1}] \end{bmatrix} + \mathbf{B}_T \begin{bmatrix} a_t \\ z_t \\ v_t \end{bmatrix}
$$
where the subscript $T$ suggests that this result is conditional on some interest rate rule ($T$ stands for Taylor). These are as follows:

$$
\begin{align*}
\boldsymbol{\mathbf{A}}_{T} &\equiv \frac{1}{\sigma + \phi_{y} + \kappa \phi_{\pi}} \begin{bmatrix}
\sigma & 1-\beta \phi_{\pi} \\
\sigma\kappa & \kappa+\beta(\sigma+\phi_{y})
\end{bmatrix}
\\
\boldsymbol{\mathbf{B}}_{T} &\equiv  \frac{1}{\sigma + \phi_{y} + \kappa \phi_{\pi}} \begin{bmatrix}
-\psi_{ya}[\sigma(1-\rho_{a}) + \phi_{y}] & 1-\rho_{z} & -1 \\
-\kappa \psi_{ya}[\sigma(1-\rho_{a}) + \phi_{y}] & \kappa(1-\rho_{z}) & -\kappa
\end{bmatrix}
\end{align*}
$$

The condition for existence and uniqueness of equilibrium is that the number of eigenvalues within the unit circle is the same as the number of non-predetermined variables and the number of eigenvalues outside the unit circle is equal to the number of predetermined variables (although stated in reverse relative to Blanchard and Kahn, that is the same intuition). Thus, we need both the eigenvalues corresponding to the endogenous variables to be inside the unit circle. As shown by Bullard and Mitra (2005), the condition to be met for this to be true is the following:

$$
\kappa(\phi_\pi - 1) + (1-\beta)\phi_y > 0
$$
Intuitively, this is saying that $\phi_\pi, \phi_y$ must be large enough: monetary policy should be sufficiently aggressive to react to fluctuation in output and inflation. This recalls the **Taylor principle** in the classical model, for $\phi_\pi > 1$: this can be relaxed slightly when the central bank also responds to output. For any reasonable calibration, however, $1-\beta$ is usually very small, making the impact of $\phi_y$ negligible.

If the conditions for equilibrium are not satisfied, we could have sunspot fluctuations. However, in contrast to the classical model, these will affect both inflation and output gap, therefore they also affect some real variables (output, employment, real wage...). This makes the NK case more serious that the classical model if the problem of indeterminacy arises.

To continue, suppose the uniqueness conditions are satisfied and solve for this unique equilibrium. In general, models of this kind cannot be solved by hand, and typically software is used, such as Dynare. Assume that $a_t=z_t=0$ and $\phi_y=0$ and exploit the **method of undetermined coefficients** (note that this method if meaningless if the equilibrium is not unique). Take the NK Phillips curve and the Dynamic IS equation and substitute with the previous coefficients.

$$
\begin{align*}
\tilde y_t &= - \frac{1}{\sigma} (\phi_\pi + v_t - \mathbb{E}[\pi_{t+1}] + \mathbb{E}_t[\tilde y_{t+1}]) \\
\pi_t &= \beta \mathbb{E}[\pi_{t+1}] + \kappa \tilde y_{t+1}
\end{align*}
$$

The method starts by conjecturing the terms of the solution:

>[!conjecture] Undetermined Coefficients
>
>$$
>\begin{align*}\tilde y_t = \delta_y v_t
>\\
>\pi_t = \delta_\pi v_t \end{align*}
>$$
>

If the exogenous variables follow a AR(1), the correct conjecture looks like the previous one (the endogenous variable change is proportional to the endogenous volume of the shock). Impose the conjecture on the previous two equations:

$$
\begin{align*}
\delta_{y} v_{t} &= - \frac{1}{\sigma}(\phi_{\pi} \delta_{\pi} v_{t} + v_{t} - \rho_{v}\delta_{\pi}v_{t}) + \rho_{v} \delta_{y} v_{t}  &  \delta_{\pi}v_{t} &= \beta \rho_{v} \delta_{\pi} v_{t} + \kappa \delta_{y} v_{t}
\\
0 &= 1 + \sigma(1-\rho_{v}) \delta_{y} + (\phi_{\pi} - \rho_{v})\delta_{\pi}  &  \kappa \delta_{y} &= (1-\beta \rho_{v})\delta_{\pi}
\end{align*}
$$

These are two linear equations in two unknowns, solved trivially by substitution. The solution returns two negative coefficients. This implies that **monetary policy is not neutral**: it affects the output gap and output thereof.

In the general case, conjectures for undetermined coefficients appear to be as follows:

>[!conjecture] Undetermined Coefficients
>
>$$
>\begin{align*}\tilde y_t &= \delta_y v_t + \varkappa_y z_t + \zeta_y a_t
>\\
>\pi_t &= \delta_\pi v_t + \varkappa_\pi z_t + \zeta_\pi a_t\end{align*}
>$$
>
is a credible conjecture since the model is **linear** and there is **no interaction** between the shocks. Then, solve shock by shock.

#### IRF: Monetary policy shock

Impulse response functions to a monetary policy shock from a calibrated version of the model allow to discuss some salient results. An increase of 1% in the interest rate in annualized terms increases the exogenous component by 1%, but output and endogenous variables decrease, so that the final increase in the real interest rate is lower than 1%. In contrast with the classical model, monetary policy shocks and the real interest rate move in the same direction.

The monetary shock utilized for the IRF functions takes the form of an increase of 25 base points in $\epsilon_{t}^v$. The increase in the real rate induces effects on consumption through the Euler equation, and thus on aggregate demand and output. This is reflected in the IS equation, where current output gap depends on current and future variables. 

![[IRF. Monetary Policy Shock.png| center | 500]]

The output gap drops, and obviously inflation as well, being related to the output gap. The natural level of output does not change, also reflecting the fact that the output gap is shocked. The real wage also decreases unambiguously, moving down along the labor supply schedule.
To solve for the price level, solve $p_t= p_{t-1} + \pi_t$ and note that the price level decreases *very* gradually until stabilization. This is consistent with negative inflation: ultimately, prices stabilize permanently at a lower level (recall, from previous passages, that there is no steady state for prices). To understand this, imagine that a firm sees decreasing demand for their goods: their response will be not only to produce less, but will also lead to lower marginal costs (decreased wage and increased marginal product of labor). Therefore, when they get a chance to adjust prices, they will try to lower prices. Finally, note that money supply also converges to the initial value.

The three predicitons of the classical model conflicting with the empirical evidence are now reversed: **non-neutrality of monetary policy, gradual adjustment of the price level, and liquidity effect** as all there. The real interest rate is affected by the nominal interest rate because inflation does not move 1-to-1 with due to price stickiness.
#### IRF: Preference shock
A negative shock to $z_t$ should be interpreted as a negative preference shock: consumers prefer to consume less at the time of the shock. The variables on the column on the left react just the same as in the monetary policy shock, with the exception of the nominal rate and the money supply.

![[IRF. Discount Rate Shock.png|center|500]]

The nominal rate reacts differently through the endogenous component of the policy rule. Inflation and output decrease, and thus the central bank lowers the interest rate. Whenever the nominal rate goes down, so does the real rate, as inflation does not change much. This occurs as an attempt to stabilize the economy, to partly offset the declining demand coming from the preference shock. However, this is not fully offset and the output goes down, although the decrease would have been even larger without the policy intervention.

The money supply goes up in the short run, but not in the long run, because of the lower nominal interest rate. Given this calibration, it tends to offset: $m_t = p_t + \pi_t - \eta i_t$, where the first two decrease and the latter increases. For the point of view of the individual firm, this shock looks similar to the monetary policy shock.
#### IRF: Technology shock

![[IRF. Technology Shock.png|center|500]]

A persistent positive technology shock calls for increased output. However, the output gap decreases and becomes negatively. This is due to the fact that output increases by less than the natural level of ouput. Implicitly, this is because the real interest rate does not decrease as much as the natural interest rate — i.e. the central bank is non stimulating the economy enough, under this particular rule and calibration. 
Inflation, as the output gap, is negative. In principle, the nominal rate responses both to inflation and output, which are now moving in opposite directions. In the present calibration, the nominal rate goes up (the reduction in inflation is dominated by the increase in output). The real wage goes up, but in principle this is ambiguous. In fact, output goes up, but employment decreases in response to a positive technology shock: $w_t = \sigma y_t + \phi n_t$. Unemployment goes down due to the labor demand equation: $n_t = \frac{y_t - a_t}{1 - \alpha}$. If output does not increase as much as technology, as it often happens, then employment decreases. This is a (fairly) general result in NK models: the demand for the good decreases by less than technology, and the firms need less workers than before to produce the, yet higher, quantity demanded by consumers.
#### Employment and technology shocks in New Keynesian and RBC models

This prediction is at odds with the standard RBC model. A positive technology shock in the RBC would lead to *increased* employment: if not, those models could not have claimed that they generate business cycles by taking technology shocks as the only source of fluctuation. Thus, the RBC school takes on the tight positive correlation between output and employment. In contrast, the opposite is predicted by the NK model. Empirical evidence does not help much to settle the debate: in the real world, many shocks occur at once, and it is quite difficult to disentangle their relative impact. In Galì (1999), permanent technology shocks found as the only shocks with a permanent effect on labor productivity, which is a feature shared with RBC model. By estimating the impact of these shocks on a number of variables through a [[Advanced Econometric Methods III#VARs and SVARs|SVAR]], GDP increases gradually but the total amount of hours worked decrease. This seems to support the NK hypothesis rather than the RBC.

![[Galì, 1999.png|center|500]]

In a related paper, Basu et al. (2006) use actual measures of technology using modified versions of Solow residual's correcting for problems in increasing returns to scale or non-perfect competition, or observed variations in factors employment. They regress every variable of interest of the current and lagged volumes of the change in technology, and obtain a similar result: a negative correlation between hours worked and technological shocks. This despite using an opposite approach (in Galì, 1999, technology was unobservable and here is a regressor).
Note that, under $\sigma=1$, employment will ultimately go back to normal, consistent with balanced growth. Put simply, the following relation must hold in the long run: $c_t + \phi n_t = \log(1-\alpha) + y_t + n_t$. In this model, $c_t=y_t$, plus the additional feature of the markup: $\phi n_t = \log(1-\alpha) - n_t - \mu_t$; however, the markup also goes back to normal in the long run.

Not only the NK models captures real effects of monetary policy on economic activity: another important message regards the evaluation of models. The main conclusion is that technological shocks should not be a relevant source of fluctuation in the real world. If this were the case, we would observe a negative correlation between output and employment; yet, the opposite is observed. There must be some other, *dominant* source of fluctuations leading to this stylized fact.

Finally, the NK model highlights that it is not sufficient to compute the second moments of the series and those of the data to validate a model. A more demanding way to test a model is to compare the predictions of a *specific* shock from the evidence in the data of *the same* shock, although these are difficult to disentangle in the real world.

<div style="page-break-after: always;"></div>

## Monetary Policy Design

How should monetary policy be designed in a world such as the one described by the New Keynesian model? To answer this question, we introduce a new variable, the **welfare-relevant output gap**: $x_t \equiv y_t - y^e_t$, where $y_t^e$ is the **efficient level of output**, i.e. it solves the problem of the social planner (maximizes utility of households) with no prices and no markets and simply resources and technology constraints. By welfare theory, this would correspond to a perfect-competition-no-externality equilibrium. By means of the welfare-relevant output gap, we will consider a second order approximation of the **welfare losses**. Second-order approximations are usually performed in form of the following second-order Taylor expansion of the log (deviations) of a generic variable from its steady state level, $\frac{X_{t}-X}{X} \approx \hat{x}_{t} + \frac{1}{2} \hat{x}_{t}^2$.
To lighten notation, suppose $U$ denotes steady state utility, $U_t$ denotes time $t$ utility, and $U^n_t$ denotes its natural level at time $t$. Then:

$$
\begin{align*} U_{t} - U &\simeq U_{c} (C_{t} - C) + U_{n} (N_{t} - N) + U_{z} (Z_{t} - Z) + \tfrac{1}{2} U_{cc} (C_{t} - C)^2 + \tfrac{1}{2} U_{nn} (N_{t} - N)^2 + \tfrac{1}{2} U_{zz} (Z_{t} - Z)^2
\\ & + U_{cn} (C_{t} - C)(N_{t} - N) + U_{cz} (C_{t} - C)(Z_{t} - Z) + U_{nz} (N_{t} - N)(Z_{t} - Z) + \text{t.i.p.} \\
\\ &\simeq Z C^{-\sigma} (C_{t} - C) - Z N^{\phi} (N_{t} - N) + U_{z} (Z_{t} - Z) - \tfrac{1}{2} Z \sigma C^{-\sigma - 1} (C_{t} - C)^2 - \tfrac{1}{2} Z \phi N^{\phi - 1} (N_{t} - N)^2 \\ & + \tfrac{1}{2} U_{zz} (Z_{t} - Z)^2 + U_{cz} (C_{t} - C)(Z_{t} - Z) + U_{nz} (N_{t} - N)(Z_{t} - Z) + \text{t.i.p.} \\
\\
&\simeq Z C^{1-\sigma} \left( \tfrac{C_{t} - C}{C} \right) - Z N^{1+\phi} \left( \tfrac{N_{t} - N}{N} \right) + U_{z} Z \left( \tfrac{Z_{t} - Z}{Z} \right) - \tfrac{1}{2} Z \sigma C^{1-\sigma} \left( \tfrac{C_{t} - C}{C} \right)^2 - \tfrac{1}{2} Z \phi N^{1+\phi} \left( \tfrac{N_{t} - N}{N} \right)^2 \\ & + \tfrac{1}{2} U_{zz} Z^2 \left( \tfrac{Z_{t} - Z}{Z} \right)^2 + U_{cz} CZ \left( \tfrac{C_{t} - C}{C} \right) \left( \tfrac{Z_{t} - Z}{Z} \right) + U_{nz} NZ \left( \tfrac{N_{t} - N}{N} \right) \left( \tfrac{Z_{t} - Z}{Z} \right) + \text{t.i.p.}
\\  \\
&\simeq Z C^{1-\sigma} (\hat{c}_{t} + \tfrac{1}{2} \hat{c}_{t}^2) - Z N^{1+\phi} (\hat{n}_{t} + \tfrac{1}{2} \hat{n}_{t}^2) + U_{z} Z z_{t} + \tfrac{1}{2} U_{zz} Z^2 z_{t}^2 - \tfrac{1}{2} Z \sigma C^{1-\sigma} \hat{c}_{t}^2 - \tfrac{1}{2} Z \phi N^{1+\phi} \hat{n}_{t}^2 \\ & + U_{cz} CZ \hat{c}_{t} z_{t} + U_{nz} NZ \hat{n}_{t} z_{t} + \text{t.i.p.}  \\
\\
&\simeq Z C^{1-\sigma} \hat{c}_{t} - Z N^{1+\phi} \hat{n}_{t} + U_{z} Z z_{t} + \tfrac{1}{2} Z C^{1-\sigma} (1 - \sigma) \hat{c}_{t}^2 - \tfrac{1}{2} Z N^{1+\phi} (1 + \phi) \hat{n}_{t}^2 + \tfrac{1}{2} U_{zz} Z^2 z_{t}^2 \\ &+ U_{cz} CZ \hat{c}_{t} z_{t} + U_{nz} NZ \hat{n}_{t} z_{t} + \text{t.i.p.}
\\ \\
&\simeq Z C^{1-\sigma} \left( \hat{c}_{t} (1 + z_{t}) + \frac{1 - \sigma}{2} \hat{c}_{t}^2 \right) - Z N^{1+\phi} (\hat{n}_{t} (1 + z_{t}) + \tfrac{1 + \phi}{2} \hat{n}_{t}^2) + \text{t.i.p.}
\\ 
U_t - U &\simeq U_c C \left( \hat{y}_t (1 + z_t) + \tfrac{1 - \sigma}{2} \hat{y}_t^2 \right) + U_n N \left( \hat{n}_t (1 + z_t) + \tfrac{1 + \varphi}{2} \hat{n}_t^2 \right) \end{align*}
$$

where the term $\text{t.i.p.}$ stands for *terms independent of policy*. Observe that, since $N_{t} = \left( \frac{Y_{t}}{A_{t}} \right)^{\frac{1}{1-\alpha}} \int_{0}^1 \left( \frac{P_{t}(i)}{P_{t}} \right)^{-\frac{\epsilon}{1-\alpha}} \,di$, then $(1-\alpha)\hat{n}_{t} = \hat{y}_{t} - a_{t} + d_{t}$. In the neighborhood of a symmetric steady state and up to a second order approximation, $d_{t} = \frac{\epsilon}{2\Theta} \text{var}_{i}(p_{t}(i))$ — a result previously proved in the derivation of [[#^b5b102|cross-sectional price dispersion]]. Thus:

$$
\begin{align*}
U_{t} - U &\simeq U_c C \left( \hat{y}_t (1 + z_t) + \frac{1 - \sigma}{2} \hat{y}_t^2 \right) + \frac{U_n N}{1-\alpha} \left( \hat{y}_t (1 + z_t) + \frac{\epsilon}{2\Theta}\text{var}_{i}(p_{t}(i)) + \frac{1 + \varphi}{2(1-\alpha)} (\hat{y}_t - a_{t})^2 \right) + \text{t.i.p.}
\end{align*}
$$

^e998e0

Last, observing that efficiency of the steady state implies that $- \frac{U_{n}}{U_{c}} = \text{MPN} = (1-\alpha) \frac{Y=C}{N}$:

$$
\begin{align*}
\frac{U_{t} - U}{U_c C} &\simeq  \hat{y}_t (1 + z_t) + \frac{1 - \sigma}{2} \hat{y}_t^2 + \underbrace{\frac{U_n N}{ (1-\alpha) U_{c}C }}_{=-1} \left( \hat{y}_t (1 + z_t) + \frac{\epsilon}{2\Theta}\text{var}_{i}(p_{t}(i)) + \frac{1 + \varphi}{2(1-\alpha)} (\hat{y}_t - a_{t})^2 \right) + \text{t.i.p.} \\
&\simeq  \hat{y}_t (1 + z_t) + \frac{1 - \sigma}{2} \hat{y}_t^2 - \hat{y}_t (1 + z_t) - \frac{\epsilon}{2\Theta}\text{var}_{i}(p_{t}(i)) - \frac{1 + \varphi}{2(1-\alpha)} (\hat{y}_t - a_{t})^2 + \text{t.i.p.} \\
&\simeq  \frac{1 - \sigma}{2} \hat{y}_t^2 - \frac{\epsilon}{2\Theta}\text{var}_{i}(p_{t}(i)) - \frac{1 + \varphi}{2(1-\alpha)} (\hat{y}_t - a_{t})^2 + \text{t.i.p.} \\
&\simeq -\frac{1}{2} \left[ \frac{\epsilon}{\Theta}\text{var}_{i}(p_{t}(i)) - (1 - \sigma) \hat{y}_t^2 + \frac{1 + \varphi}{(1-\alpha)} (\hat{y}_t - a_{t})^2 \right] + \text{t.i.p.} \\
&\simeq  \frac{1 - \sigma}{2} \hat{y}_t^2 - \frac{\epsilon}{2\Theta}\text{var}_{i}(p_{t}(i)) - \frac{1 + \varphi}{2(1-\alpha)} (\hat{y}_t - a_{t})^2 + \text{t.i.p.} \\
&\simeq - \frac{1}{2} \left[ \frac{\epsilon}{\Theta}\text{var}_{i}(p_{t}(i)) + \left(  \sigma + \frac{\phi+\alpha}{1-\alpha} \right) \hat{y}_t^2 -2 \left( \frac{1 + \varphi}{(1-\alpha)} \right) \hat{y}_t a_{t} \right] + \text{t.i.p.} \\
&\simeq - \frac{1}{2} \left[ \frac{\epsilon}{\Theta}\text{var}_{i}(p_{t}(i)) + \left(  \sigma + \frac{\phi+\alpha}{1-\alpha} \right) (  \hat{y}_t^2 -2  \hat{y}_{t} \hat{y}_{t}^n)\right] + \text{t.i.p.} \\
&\simeq - \frac{1}{2} \left[ \frac{\epsilon}{\Theta}\text{var}_{i}(p_{t}(i)) + \left(  \sigma + \frac{\phi+\alpha}{1-\alpha} \right) \tilde{y}_{t}^2 \right] + \text{t.i.p.}
\end{align*}
$$

^0c3714

exploiting the fact that $\hat{y}_{t}^n = \frac{1+\phi}{\sigma(1-\alpha)+\phi+\alpha} a_{t} - \overbrace{\frac{ (1-\alpha) [\log(1-\alpha) + \mu] }{1+\phi} }^{\text{t.i.p.}}$ (the details of this equation can be found in the derivation of [[#^a18255|employment, real wages, and the real rate]]). Finally, the welfare loss resulting from fluctuations from the steady state can be written as:

$$
\begin{align*}
\mathbb{W} &\equiv -\mathbb{E}_{0} \sum_{t=0}^\infty \beta^t \frac{U_{t} - U}{U_{c}C}
\\
& \approx \frac{1}{2} \mathbb{E}_{0} \sum_{t=0}^\infty \beta^t \left[ \frac{\epsilon}{\Theta}\text{var}_{i}(p_{t}(i)) + \left(  \sigma + \frac{\phi+\alpha}{1-\alpha} \right) \tilde{y}_{t}^2 \right]
\\
& \approx \frac{1}{2} \mathbb{E}_{0} \sum_{t=0}^\infty \beta^t \left[ \frac{\epsilon}{\lambda} \pi_{t}^2 + \left(  \sigma + \frac{\phi+\alpha}{1-\alpha} \right) \tilde{y}_{t}^2 \right]
\end{align*}
$$

^4c6b9a

An implication of this equation is that an optimal policy — a policy that minimizes the welfare loss — must enforce zero inflation (as we anticipated in deriving the NKPC in the previous chapter) and zero output gap. If the SS were efficient, in would holds the identity $\text{MRS} = \text{MPN}$. In case of inefficiency, however, they will differ: for reasons that will be clarified in the future, MPN is usually larger than MRS. Therefore, the output gap will very hardly be zero.
In turn, the average welfare loss will depend on a linear combination of the variances of the output gap and inflation:

$$
\mathbb{L} = \frac{1}{2} \left[  \left( \sigma + \frac{\phi + \alpha}{1-\alpha} \right) \text{var}(\tilde{y}_{t}) + \frac{\epsilon}{\lambda} \text{var}(\pi_{t})  \right]
$$

^d46b92

Note that the relative weight of output gap fluctuations in the loss function is increasing in $\sigma$, $\phi$, and $\alpha$. The reason is that larger values of those "curvature" parameters amplify the effect of any given deviation of output from its natural (efficient) level on the size of the gap between the marginal rate of substitution and the marginal product of labor, which is a measure of the economy’s aggregate inefficiency. On the other hand, the weight of inflation fluctuations is increasing in the elasticity of substitution among goods, since  the latter amplifies the dispersion in the quantities of goods consumed of different varieties caused by any given price dispersion. The inflation weight is also increasing in the degree of price stickiness $\theta$ (which is inversely related to $\lambda$), since a greater stickiness amplifies the degree of price dispersion associated with any given deviation from zero inflation.

Let us consider the solution to this problem in two environments: in the **efficient natural equilibrium**, a case unrealistic in practice but with a simple benchmark solution where the only source of inefficiency is the presence of sticky prices, and in an **inefficient natural equilibrium**, where the other imperfections add to the economy on top of sticky prices.

### Efficient Natural Equilibrium

In case of an efficient equilibrium, the only distortion in the economy lies in sticky prices. An equilibrium is efficient if *at all times*, not only in the steady state, the efficient output is equal to the natural level of output. This grounds the first theoretical justification for price stability: price stability makes it optimal for efficient equilibria to be implemented and minimize welfare.
How can the central bank bring about this optimal outcome as an equilibrium? That is, ensure that inflation in 0? The optimal rule:

$$
i_t = r_t^n + \phi_\pi \pi_t
$$

must be such that, when plugged into the Dynamic IS equation and the NKPC, it yields:
$$\tilde y _t = \mathbb{E}_t [\tilde y_{t+1}] - \frac{1}{\sigma} [\phi_\pi \pi_t - \mathbb{E}_t[\pi_{t+1}] ]$$
Which is solved at 0 inflation. Is it, however, the unique solution? For a coefficient $\phi_\pi>1$, the solution is unique, as discussed in [[Advanced Macroeconomics III (Galì)#Classical Monetary Model|Chapter 1]]. The practical problem with this rule, however, is that a central bank may not be able to follow it, since the natural interest rate is not observed and is rather a theoretical concept. In actual practice, interest rate rules must be "simple", and definitely not rely on an unobservable and hardly imputable state of the economy.

Are there any simple rules approximating the optimal rule? This question fueled a large body of recent research in monetary macroeconomics. The criterion to evaluate simple rules is exactly the welfare loss previously derived and originally proposed by Woodford (2003). Let us consider the **Taylor rule** based on this benchmark.

>[!definition] Taylor rule
>$$i_t = \rho + \phi_\pi \pi_t + \phi_y \hat y_t$$

Simulating the model under such rule and proper calibrations of the parameters, the welfare loss can be computed based on the output gap and inflation. Consider both the technology shock and demand shock, and see how the rule behaves conditional on each shock separately. We'll consider the benchmark values proposed by Taylor, namely $\phi_\pi = 1.5$ and $\phi_y = 0.125$. The table computes the welfare loss, which can be interpreted as the loss that a consumer is willing to internalize in order to get rid of fluctuations.

|                    | **Technology** |      |       |      | **Demand** |      |      |      |
| :----------------: | :------------: | :--: | :---: | :--: | :--------: | :--: | :--: | :--: |
|    $\phi_{\pi}$    |      1.5       | 1.5  |   5   | 1.5  |    1.5     | 1.5  |  5   | 1.5  |
|     $\phi_{y}$     |     0.125      |  0   |   0   |  1   |   0.125    |  0   |  0   |  1   |
|    $\sigma(y)$     |      1.85      | 2.07 | 2.25  | 1.06 |    0.59    | 0.68 | 0.28 | 0.31 |
| $\sigma(\tilde y)$ |      0.44      | 0.21 | 0.03  | 1.23 |    0.59    | 0.68 | 0.28 | 0.31 |
|   $\sigma(\pi)$    |      0.69      | 0.34 | 0.05  | 1.94 |    0.20    | 0.23 | 0.09 | 0.10 |
|    $\mathbb{L}$    |      1.02      | 0.25 | 0.006 | 7.98 |    0.10    | 0.13 | 0.02 | 0.02 |

Consider a rule with parameters 1.5/0. Of course, the volatility of output increases; however, the volatility of output gap and inflation decrease. Through the lens of the model, this is an improvement: welfare losses depend on output gap and inflation, not output. Move on to calibration 5/0, that is: A very aggressive central bank increases the volatility of output even more, but output gap, inflation, and welfare losses are basically 0. Last, if the central bank stabilizes outcome aggressively (1.5/1), the welfare loss becomes very large. We may erroneously conclude that responding to output is not desirable, while responding to inflation is. However, this depends on the fact that there fluctuations are technological, and technology only affects the natural level of output. A  stabilizing output means that the output gap is *de-stabilized*, as the gap cannot simply follow the movement of output itself. Ideally, we'd like to steer output so that it follows its natural level, rather than diverging from it.
Let us now turn to demand shocks. In this scenario, ignoring output is not optimal, as it leads to fluctuations in the output gap and inflation. By increasing the output coefficient over Taylor's benchmark, a very efficient rule is obtained. This is because we introduced preference shocks, a type of shock that does not affect output. By stabilizing output, the central bank is actually stabilizing the output gap and inflation, altogether and all at once.

In the real world, however, the two types of shocks occur at the same time, and the central bank may not be able to perfectly decompose them. In light of the previous reasoning, a central bank should **focus on inflation**: this is the dimension that does well with both shocks, while stabilizing output can be detrimental if the shocks are due to technological shifts and wrongly interpreted as demand shocks. Moreover, the output gap is not directly observed. Ultimately, then, these two arguments justify the central banks' focus on inflation targeting. In fact, in the limit, a policy with $\phi_y=0$ and $\phi_\pi \to \infty$ would be such that both 0 inflation and 0 output gap would hold. In practice, this is not credible as minimal fluctuations due to measurement errors would imply an enormous responses by the central bank.

Why is inflation *bad* in this economy? In fact, it does not appear in households utility. The fundamental reason is that inflation generates **[[#^b5b102|price dispersion]]**. In an inflationary environment, some firms are adjusting prices; but by assumption only a fraction of firm can be doing that, leading to dispersion. If the deviation from 0 is very large, then these firms are adjusting *by a lot*. However, price dispersion necessarily generates *quantity dispersion* among various types of goods, where these would, in turn, enter the utility function symmetrically and using an identical technology. Price fluctuations lead to fluctuations in the composition of consumption.
While the social planner would choose equal proportion of these goods, firms produce different quantities, hire different quantities of labor. Then, firms with low prices will (temporarily) also occupy more labor. In fact, in the function $\mathbb L$ $\epsilon$ is present, telling the **extent to which price dispersion is reflected in quantity dispersion**. In contrast, it is inversely correlated with $\lambda$: if price stickiness is strong and $\theta$ is large, in order to achieve a given level of inflation, a larger dispersion of prices will follow, as a smaller fraction of firm adjust prices at any period.
In monetary economics, there is a long standing belief that inflation induces other types of losses, typically of transactionary kind. With its minimal assumptions on utility and monopolistic competition, however, this is the kind of losses that the New Keynesian model predicts.
### Inefficient Natural Equilibrium

In the case of an infficient natural equilibrium, even if prices were flexible, the outcome would not be optimal, meaning that some additional distortions must be present on top of sticky prices (labor markets, taxation, externalities...). If so, the standard output gap and the welfare relevant output gap no longer coincide: $y_{t}^n \neq y_{t}^e$. Recall that the welfare output gap is the relevant level of output for optimal monetary policy — the NKPC is, in fact, expressed in terms of the standard output gap. To begin with, rewrite the NKPC in terms of the welfare relevant output gap, by first noting that $\tilde y_t = \hat y_t - \hat y_t^n = (\hat y_t - \hat y_t ^e) + (\hat y_t^e - \hat y_t^n)$ by adding and substracting the deviations of the efficient level of output from its steady state:

$$
\begin{equation*}
\pi_t = \beta \mathbb{E}_t [\pi_{t+1}] + \kappa \hat x_t + u_t
\end{equation*}
$$

^aa7e11

The output gap was replaced by the **welfare-relevant output gap** $\hat x \equiv \hat y_t - \hat y_t^e$ and the cost push shock $u_t \equiv \kappa( \hat y_t^e - \hat y_t^n )$ which is independent of monetary policy since the natural level of output is not affected by shocks nor by fluctuations in the efficient output gap (which solves the social planner's problem). Fluctuations in $u_t$ can be interpreted as shocks in presence of distortions or imperfections that make the economy respond inefficiently to the shock despite price flexibility. The **cost push shocks** will fluctuate because the natural level of output may respond differently than the efficient level of output due to some distortionary inefficiency.

The welfare loss under an inefficient economy are derived as follows. Starting from [[#^e998e0]]:

$$
U_{t} - U \simeq U_c C \left( \hat{y}_t (1 + z_t) + \frac{1 - \sigma}{2} \hat{y}_t^2 \right) + \frac{U_n N}{1-\alpha} \left( \hat{y}_t (1 + z_t) + \frac{\epsilon}{2\Theta}\text{var}_{i}(p_{t}(i)) + \frac{1 + \varphi}{2(1-\alpha)} (\hat{y}_t - a_{t})^2 \right) + \text{t.i.p.}
$$

Let $\Phi$ denote the size of the steady state distortion. This is defined implicitly by $- \frac{U_{n}}{U_{c}} = \text{MPN}(1-\Phi)$:

$$
\frac{U_{t} - U}{U_c C } = \hat{y}_t (1 + z_t) + \frac{1 - \sigma}{2} \hat{y}_t^2 -(1-\Phi) \left( \hat{y}_t (1 + z_t) + \frac{\epsilon}{2\Theta}\text{var}_{i}(p_{t}(i)) + \frac{1 + \varphi}{2(1-\alpha)} (\hat{y}_t - a_{t})^2 \right) + \text{t.i.p.}
$$

Under the "small distortion" assumption, so that the product $\Phi$ with a second-order term can be taken as neglibigle:

$$
\begin{align*}
\frac{U_{t} - U}{U_c C } &\simeq \hat{y}_t (1 + z_t) + \frac{1 - \sigma}{2} \hat{y}_t^2 -(1-\Phi) \left( \hat{y}_t (1 + z_t) + \frac{\epsilon}{2\Theta}\text{var}_{i}(p_{t}(i)) + \frac{1 + \varphi}{2(1-\alpha)} (\hat{y}_t - a_{t})^2 \right) + \text{t.i.p.} \\
&\simeq  \Phi \hat{y}_{t} (1 + z_t)  -\frac{1}{2} \left[ \frac{\epsilon}{\Theta}\text{var}_{i}(p_{t}(i)) - (1 - \sigma) \hat{y}_t^2 + \frac{1 + \varphi}{1-\alpha} (\hat{y}_t - a_{t})^2 \right] + \text{t.i.p.} \\
&\simeq \Phi \hat{y}_{t} (1 + z_t) - \frac{1}{2} \left[ \frac{\epsilon}{\Theta}\text{var}_{i}(p_{t}(i)) + \left(  \sigma + \frac{\phi+\alpha}{1-\alpha} \right) \tilde{y}_{t}^2 \right] + \text{t.i.p.}
\\
\mathbb{W} & \simeq \frac{1}{2} \mathbb{E}_{0} \sum_{t=0}^\infty \beta^t \left[  -\Phi \hat{x}_{t} + \left( \sigma + \frac{\phi + \alpha}{1-\alpha} \right) \hat{x}_{t}^2 + \frac{\epsilon}{\lambda} \pi_{t}^2  \right] + \text{t.i.p} \\
&\simeq - \mathbb{E}_{0} \sum_{t=0}^\infty \beta^t \left[ \Phi \hat{x}_{t} - \frac{1}{2} \kappa \hat{x}_{t}^2 + \frac{\epsilon}{\lambda} \pi_{t}^2  \right] + \text{t.i.p}
\end{align*}
$$

following the same derivation as [[#^0c3714]], [[#^4c6b9a]] and [[#^d46b92]] , using the additional fact that $\hat{y}_{t}^e \equiv y_{t}^e - y^e$ and thus $\hat{y}_{t}^e = \frac{1+\phi} { \sigma(1-\alpha) + \phi + \alpha } a_{t}$ (also, dropping the  $1 + z_{t}$ term as independent of monetary policy[^2]). By assuming an efficient steady state, i.e., $\Phi=0$, this case in entirely analogous to the efficient natural equilibrium. Note that this problem is entirely proportional to the following:

$$
\min \mathbb{E}_{0} \sum_{t=0}^\infty \beta^t (\pi_{t}^2 + \vartheta x_{t}^2) \quad \text{ such that } \pi_{t} = \beta \mathbb{E}_{t} [\pi_{t+1}] + \kappa x_{t} + u_{t}
$$

for an exogenous $u_t = \rho_{u} u_{t-1} + \epsilon_{t}$ with $\vartheta$ representing the weight of output gap fluctuations relative to inflation in the loss function and welfare-theoretically equal to the utilithy based $\vartheta = \left( \sigma + \frac{\phi + \alpha}{1-\alpha} \right) \frac{\lambda}{\epsilon} = \frac{\kappa}{\epsilon}$. Alternatively, interpret $\vartheta$ arbitrary central bank preference towards output gap rather tha prices. Additional assumptions should be make on how the central bank can affect the expectations. Two assumption will be proposed. In one case, the central bank cannot influence the expectations of future variables.
#### Optimal Monetary Policy under Discretion

If the central bank cannot influence the expectations of future variables, then the problem can be transformed into a static problem where the central bank takes expected inflation as given and responds optimally through the NKPC. The solution is obtained at:

$$
\begin{align*}
& \min_{ x_{t}, \pi_{t} } \pi_{t}^2 + \vartheta x_{t}^2 &\text{ such that } \pi_{t} = \kappa x_{t} + v_{t} \\
= & \min_{x_t} \; (\kappa x_t + v_t)^2 + \vartheta x_t^2
\end{align*}
$$

with optimality condition given by $x_t = - \frac{\kappa}{\vartheta} \pi_t$. This is known as the **targeting rule**, which focuses not on the instruments of monetary policy but rather on the target variables. This rule should offset inflation by generating a recession (lowering the output gap), so that it also lowers inflation. The larger is $\vartheta$, the smaller the recession. To find the corresponding equilibrium, take the NKPC and plug in the optimal $x_t$; after obtaining the corresponding difference equation in $\pi_t$, solve by iterating forward:

$$
\begin{align*}
\pi_{t} &= \beta \mathbb{E}_{t} [\pi_{t+1}] + \kappa x_{t} + u_{t} \\
&= \beta \mathbb{E}_{t} [\pi_{t+1}] - \frac{\kappa^2}{\vartheta} \pi_{t} + u_{t} \\
&= \frac{\beta\vartheta}{\kappa^2 + \vartheta} \mathbb{E}_{t}[\pi_{t+1}] + \frac{\vartheta}{\kappa^2 + \vartheta} u_{t}  \\
\\&
\begin{cases}
\mathbb{E}_{t}[u_{t+1}] &= \rho_u u_t \\ \mathbb{E}_{t}[\pi_{t+1}] &= \frac{\beta \vartheta}{\kappa^2 + \vartheta} \mathbb{E}_{t} [\pi_{t+2}] + \frac{\vartheta \rho_u}{\kappa^2 + \vartheta} u_{t} 
\end{cases} \\
\\
\pi_{t} &= \frac{\beta \vartheta}{\kappa^2 + \vartheta} \left( \frac{\beta \vartheta}{\kappa^2 + \vartheta} \mathbb{E}_{t} [\pi_{t+2}] + \frac{\vartheta \rho_u}{\kappa^2 + \vartheta} u_{t} \right) + \frac{\vartheta}{\kappa^2 + \vartheta} u_{t} \\ \pi_{t} &= \left( \frac{\beta \vartheta}{\kappa^2 + \vartheta} \right)^2 \mathbb{E}_{t} [\pi_{t+2}] + \frac{\vartheta (\beta \vartheta \rho_u + \kappa^2 + \vartheta)}{(\kappa^2 + \vartheta)^2} u_{t} \\ \pi_{t} &= \left( \frac{\beta \vartheta}{\kappa^2 + \vartheta} \right)^j \mathbb{E}_{t} [\pi_{t+j}] + \sum_{i=0}^{j-1} \left( \frac{\beta \vartheta}{\kappa^2 + \vartheta} \right)^i \frac{\vartheta}{\kappa^2 + \vartheta} \mathbb{E}_{t}[u_{t+i}] \\ \pi_{t} &= \frac{\vartheta}{\kappa^2 + \vartheta} \sum_{i=0}^{\infty} \left( \frac{\beta \vartheta \rho_u}{\kappa^2 + \vartheta} \right)^i u_t \\ \pi_{t} &= \frac{\vartheta}{\kappa^2 + \vartheta} \frac{1}{1 - \frac{\beta \vartheta \rho_u}{\kappa^2 + \vartheta}} u_t \\ \pi_{t} &= \frac{\vartheta}{\kappa^2 + \vartheta - \beta \vartheta \rho_u} u_t \\ \pi_{t} &= \frac{\vartheta}{\kappa^2 + \vartheta (1 - \beta \rho_u)} u_t
\end{align*}
$$

which can be summarized in the following equilibrium:

$$
\begin{cases}
\pi_{t} = \frac{\vartheta}{\kappa^2 + \vartheta (1 - \beta \rho_u)} u_t \\
x_{t} = \frac{\kappa}{\kappa^2 + \vartheta (1 - \beta \rho_u)} u_t \\
i_{t} = r_{t}^e + \frac {\vartheta \rho_{u} + \sigma \kappa(1-\rho_{u})} {\kappa^2 + \vartheta(1-\beta \rho_{u})} u_{t}
\end{cases}
$$

^4a5398

This is sometimes referred to as **time-consistent policy**: there is no sense in which the central bank may be tempted to break past promises — indeed, it doesn't make any exception. In presence of a cost push shock, a central bank following this rule should respond by letting inflation increase, but not completely: in fact, it is calling at the same time for a negative output gap, engineering a recession, which tends to dampen the inflationary pressures. Another way to put this is that **the central bank redistributes the costs between the output gap and inflation, since the losses are convex in either variable**.

Note that, however, the interest rate rule in [[#^4a5398]] does not guarantee a unique equilibrium, as the price dynamics might be indetermined. To uniquely pin down an equilibrium, implement the rule by rewriting the expression and appending a term proportional to the deviation of inflation from its desired level:

$$
\begin{align*}
i_{t} &= r_{t}^e + \frac {\vartheta \rho_{u} + \sigma \kappa(1-\rho_{u})} {\kappa^2 + \vartheta(1-\beta \rho_{u})} u_{t} + \phi_{\pi} \left(  \pi_{t} - \frac{\vartheta}{\kappa^2 + \vartheta(1-\beta \rho_{u})} u_{t}  \right) \\
&= r_{t}^e + \Theta u_{t} + \phi_{\pi} \pi_{t}
\end{align*}
$$

for $\Theta = \frac{\sigma \kappa (1-\rho_{u}) - \vartheta (\phi_{\pi} - \rho_{u})}{\kappa^2 + \vartheta(1 - \beta ) }$. Ex post, in equilibrium, the term in brackets will be 0, but it is the one that guarantess uniqueness: the central bank has to threaten to increase $i$ sufficiently if inflation deviates from the desired path.
#### Optimal Monetary Policy under Commitment

In this other case, the central bank commits itself to a plan in period 0 which is state-contingent but provides  a specification for all subsequent periods in all scenarios and moves of nature. Afterwards, it just implements the plan. The central bank may be tempted to deviate, but we assume the central bank sticks to the plan by assumption of commitment. In so doing, the central bank can affect expectations of future variables. The central bank solve the state-contingent plan that minimizes the loss function subject to the sequence of constraints:

$$
\begin{align*}
\min_{ \{ x_{t}, \pi_{t} \}_{t=0}^\infty } \beta^t ( \pi_{t}^2 + \vartheta x_{t}^2 ) \quad \text{ such that } \pi_{t} = \beta \mathbb{E}_{t} [p_{t+1}] + \kappa x_{t} + u_{t} 
\end{align*}
$$

Set up the Lagrangian (for each period) and solve for the optimality conditions:

$$
\mathcal{L} = \mathbb{E}_{0} \sum_{t=0}^\infty \beta^t \left[  \frac{1}{2} ( p_{t}^2 + \vartheta x_{t}^2 ) + \xi_{t} (\pi_{t} - \kappa x_{t} - \beta \pi_{t+1}) \right]
$$

Note that the exogenous error term disappears by the law of iterated expectations (i.e., $\mathbb{E}_{0} [ \mathbb{E}_{t} [\pi_{t+1}] ] = \mathbb{E}_{0} [ \pi_{t+1}]$). The optimality conditions are as follows:

$$
\begin{cases}
\vartheta x_{t} - \kappa \xi_{t} = 0 \\
\pi_{t} + \xi_{t} - \xi_{t-1} = 0
\end{cases}
$$

assuming $\xi_{0-1}=0$, which implies $\xi_{0} = -\pi_{0}$. Combining the two constraints to eliminate the Lagrangian multipliers, note that at time 0:

$$
\begin{align*}
x_{0} &= -\frac{\kappa}{\vartheta} \pi_{0} \\
x_{1} - x_{0} &= x_{0} -\frac{\kappa}{\vartheta}\pi_{1} - x_{0} \\
\Delta x_{1} &= - \frac{\kappa}{\vartheta} \pi_{1}  \\
\Delta x_{t} &= - \frac{\kappa}{\vartheta}\pi_{t} \\
x_{t} &= x_{0} - \frac{\kappa}{\vartheta} \sum_{j=0}^t \pi_{j} \\
x_{t} &= - \frac{\kappa}{\vartheta} (p_{t} - p_{-1}) \\
x_{t} &= - \frac{\kappa}{\vartheta} \hat{p}_{t}
\end{align*}
$$

^3c8416

Combining this result with [[#^aa7e11]]:

$$
\begin{align*}
\pi_t &= \beta \mathbb{E}_t [\pi_{t+1}] + \kappa \hat x_t + u_t \\
&= \beta \mathbb{E}_t [\pi_{t+1}] + \kappa (\hat{y}_t - \hat{y}_t^n) + u_t
\end{align*}
$$

and taking [[#^26558a]] plugged into the Dynamic IS [[#^1d20a7]]:

$$
\begin{align*}
\Delta p_t &\equiv p_t - p_{-1}
\\
\pi_t &= (p_t - p_{-1}) - (p_{t-1} - p_{-1}) = \Delta p_t - \Delta p_{t-1}
\\
\pi_{t+1} &= \Delta p_{t+1} - \Delta p_t
\\
\Delta p_t - \Delta p_{t-1} &= \beta \mathbb{E}_t [ \Delta p_{t+1} - \Delta p_t ] + \kappa x_t + u_t
\\
\Delta p_t - \Delta p_{t-1} &= \beta \mathbb{E}_t[\Delta p_{t+1}] - \beta \Delta p_t - \frac{\kappa^2}{\vartheta} \Delta p_t + u_t
\\
\Delta p_t + \beta \Delta p_t + \frac{\kappa^2}{\vartheta} \Delta p_t &= \Delta p_{t-1} + \beta \mathbb{E}_t [\Delta p_{t+1} ] + u_t \\
\Delta p_t \left(1 + \beta + \frac{\kappa^2}{\vartheta}\right) &= \Delta p_{t-1} + \beta \mathbb{E}_t [ \Delta p_{t+1} ] + u_t \\
\Delta p_t \left(\frac{\vartheta(1+\beta) + \kappa^2}{\vartheta}\right) &= \Delta p_{t-1} + \beta \mathbb{E}_t [\Delta p_{t+1}] + u_t \\
\Delta p_t &= \frac{\vartheta}{\vartheta(1+\beta) + \kappa^2} \Delta p_{t-1} + \frac{\vartheta \beta}{\vartheta(1+\beta) + \kappa^2} \mathbb{E}_t [ \Delta p_{t+1} ] + \frac{\vartheta}{\vartheta(1+\beta) + \kappa^2} u_t \\
\Delta p_t &= \gamma \Delta p_{t-1} + \gamma \beta \mathbb{E}_t [ \Delta p_{t+1} ] + \gamma u_t
\end{align*}
$$

^c74c8a

for $\gamma \equiv \frac{\vartheta}{\vartheta(1+\beta) + \kappa^2}$. To find a stationary solution to this difference equation, maintaining the assumption that the cost-push shock is an AR(1) process, first guess that the solution takes the form $\hat{p}_{t} = \delta \hat{p}_{t} + b u_{t}$ (see the second identify in the following derivation) and verify it. That is:

$$
\begin{align*}
\Delta p_t &= \gamma \Delta p_{t-1} + \gamma \beta \mathbb{E}_t [ \Delta p_{t+1} ] + \gamma u_t 
\\
\Delta p_t &= \delta \Delta p_{t-1} + b u_t
\\
\mathbb{E}_t [ \Delta p_{t+1} ] &= \delta \mathbb{E}_t [ \Delta p_t ] + b \mathbb{E}_t [ u_{t+1} ] \\
&= \delta \Delta p_t + b \rho_u u_t \\
&= \delta (\delta \Delta p_{t-1} + b u_t) + b \rho_u u_t \\
&= \delta^2 \Delta p_{t-1} + b(\delta + \rho_u) u_t
\end{align*}
$$

Plugging this into the result of [[#^c74c8a]]:

$$
\begin{align*}
\delta \Delta p_{t-1} + b u_t &= \gamma \Delta p_{t-1} + \gamma \beta \left[ \delta^2 \Delta p_{t-1} + b(\delta + \rho_u) u_t \right] + \gamma u_t \\
\end{align*}
$$

Equating the coefficients of $\Delta p_{t-1}$, we obtain:

$$
\begin{gather}
\delta = \gamma + \gamma \beta \delta^2 
\\
\gamma \beta \delta^2 - \delta + \gamma = 0
\end{gather}
$$

Solving this quadratic equation yields a stable solution for $|\delta| < 1$. In the same vein as the textbook, take the smallest root, that is $\delta = \frac{1 - \sqrt{1 - 4\beta\gamma^2}}{2\gamma\beta}$.
Now equate the coefficients of $u_t$:

$$
\begin{align*}
b &= \gamma \beta b(\delta + \rho_u) + \gamma \\
b (1 - \gamma \beta \delta - \gamma \beta \rho_u) &= \gamma \\
b &= \frac{\gamma}{1 - \gamma \beta \delta - \gamma \beta \rho_u} \\
\end{align*}
$$

From $\delta = \gamma (1 + \beta \delta^2)$, we have $\gamma = \frac{\delta}{1 + \beta \delta^2}$. Substitute into $b$:

$$
\begin{align*}
b &= \frac{\frac{\delta}{1 + \beta \delta^2}}{1 - \left(\frac{\delta}{1 + \beta \delta^2}\right) \beta \delta - \left(\frac{\delta}{1 + \beta \delta^2}\right) \beta \rho_u} \\
&= \frac{\delta}{(1 + \beta \delta^2) - \beta \delta^2 - \beta \delta \rho_u} \\
&= \frac{\delta}{1 - \beta \delta \rho_u} \\
\end{align*}
$$

which leads to:

$$
\Delta p_t = \delta \Delta p_{t-1} + \frac{\delta}{1-\delta\beta\rho_u} u_t
$$

^7e466a

The previous equation provides a stationary solution to prices difference equation. In terms of notation, note that $\Delta p_{t}$ measures the drift or deviation of the price level from a predetermined benchmark that is central to the optimal policy problem under commitment, i.e. the cumulative deviation from that starting "implicit target" $p_{t-1}$​.
It is also possible to derive the equilibrium process for the output gap, starting from [[#^7e466a]] and the last line of [[#^3c8416]]:

$$
\begin{align*}
\begin{cases}
\Delta p_t = -\frac{\vartheta}{\kappa} x_t \\
\Delta p_{t-1} = -\frac{\vartheta}{\kappa} x_{t-1}
\end{cases}
\;\longmapsto\;
-\frac{\vartheta}{\kappa} x_t &= \delta \left(-\frac{\vartheta}{\kappa} x_{t-1}\right) + \frac{\delta}{1-\delta\beta\rho_u} u_t \\
x_t &= \delta x_{t-1} - \frac{\kappa\delta}{\vartheta(1-\delta\beta\rho_u)} u_t \\
\begin{cases}
\Delta p_0 &= \delta \Delta p_{-1} + \frac{\delta}{1-\delta\beta\rho_u} u_0 \\
&= \frac{\delta}{1-\delta\beta\rho_u} u_0
\end{cases}
\;\longmapsto\;
x_0 &= -\frac{\kappa}{\vartheta} \left( \frac{\delta}{1-\delta\beta\rho_u} u_0 \right) \\
&= - \frac{\kappa\delta}{\vartheta(1-\delta\beta\rho_u)} u_0
\end{align*}
$$

Combining these results:

$$
\begin{align*}
x_t &= \delta x_{t-1} - \frac{\kappa\delta}{\vartheta(1-\delta\beta\rho_u)} u_t
\\
x_0 &= - \frac{\kappa\delta}{\vartheta(1-\delta\beta\rho_u)} u_0
\end{align*}
$$

The first equation provides an equilibrium process for the output gap, while the latter finds the response of the output gap at the time of the shock.

### Discussion: Gains from Commitment 

The commitment rule is preferred over the discretion rule. A simple argument involves revealed preference: since discretion is feasible also under commitment, the fact that committing leads to a different optimal response reveals that it dominates discretion.
Moreover, under commitment, inflation is lower at the time of the shock even if the recession is also milder: it attains a free lunch in reducing both inflation and output gap fluctuations relative to discretion. This is possible because, even though the recession is mild, the expectation that it will be negative in the future makes it possible for inflation to be lower today, as inflation depends on expected future output gaps. These are managed by the central bank's expectation technology.

More formally, solve the NKPC by forward iteration and note that:
$$\pi_t = \kappa x_t + \kappa \sum_{k=1}^\infty \beta^k \mathbb{E}_t[x_{t+k}] + \frac{1}{1-\beta\rho_u} u_t$$The infinite sum on the right hand side cannot be affected under discretion, but it can under commitment. This gives a larger margin of manouver not to concentrate the recession in one period but to distribute it over more periods.

A comparison between discretion and commitment in monetary policy for a transitory (persistent) cost-push shock are plotted in the following figures:


 ![[Cost-push shock, transitory.png|300]] ![[Cost-push shock, persistent.png|300]]


>[!focus]- Optimal Monetary Policy below the Zero Lower Bound
>Assume the optimal rule is:
>$$i_t = r_t^n + \phi_\pi \pi_t$$
>which shows that shocks to the natural rate (e.g., technology shocks) making the natural rate negative. In such case, it would be impossible to have zero inflation and zero output gap with a non-negative interest rate.
>
>Assume that the natural rate has a steady state of 4% (quite unrealistic, these days) and has shock of -4% for 5 periods which is completely unanticipated and whose duration is known (perfect foresight). (A similar shock can be induced by manually imposing a decline in $z_t$) What would a central bank do?
>
>If they act under discretion, the answer is intuitive and easy to formalize. The nominal rate drops to zero for the length of the shock; after period 6, output gap and inflation are at 0. The central bank under discretion wouldf want to lower below 0, but it cannot. Not surprisingly, the output gap and inflation are negative during the shock.
>
>The central bank can improve under the commitment case. In fact, they can keep the interest rate at 0 for two extra periods. The main consequence is that output gap and inflation are much more stable. Thanks to the Dynamic IS equation, which depends on expected future interest rates, the central bank can afffect expectations and reduce the output loss, stimulating the economy.
>
>A more detailed treatment of such cases can be found [[Topics in Macroeconomics III#Zero Lower Bound|here]].

### Empirical Evidence on Interest Rate Rules

In recent times, central banks have adopted interest rate(s) as their main monetary policy tool. The literature on interest rate rules started with Taylor (1993), the original proposer of an interest rate rule thereafter known as the **Taylor rule**. Taylor proposed a formula that, in his view, was a good description of how the Fed set interest rate during Greenspan's chairmanship (1987-1992). The formula appears as follows:

$$
i_t^{(a)} = 4.0 + 1.5 \left( \pi_t^{(4)} - 2.0 \right) + 0.5 \hat y_t
$$

where the quarterly formula is obtained by dividing coefficients by 4 (apart from the response parameter 1.5 which is constant)

$$
i_t = 1.0 + 1.5(\pi_t - 0.5) + 0.125 \hat y_t
$$

and $\hat y_t$ is the traditional output gap or detrended log GDP. To implement this rule in actual practice, the Fed injects or withdraws liquidity in the market to move interest rates towards the target by free market operations. The natural interpretation of 2.0 is as the inflation target over annual basis. The nominal rate should be around 2%, and 4.0 is the intercept consistent with an inflation target of 2% and such a natural rate.

Although Taylor was aiming at providing a purely positive account of practical policymaking, *ex post* many economists resolved to give it a normative interpretation. Great Moderation is a remarkable example. During the so-called Great Moderation, inflation was stable and low and recession were few and mild. As a consequence, a consensus arose that the Taylor rule was consistent with desirable macroeconomic outcomes: those experienced during the Great Moderation.
Once this normative perspective is adopted, it is possible to evaluate monetary policy in historical periods or economies by comparing the interest rate set by the central bank at any point in time with that implied by the Taylor rule. Taylor did so in his 1999 paper, showing that from 1960 to 1986 the Taylor rule deviates hugely from actual practice, i.e. the historical Federal Funds Rate. In particular, the deviations were typically positive from 1960 to 1980, suggesting that monetary policy was too expansionary (i.e. the interest was too low) if we assume the Taylor rule as a normative benchmark. Taylor interprets this as one of the reasons why this period displayed high and volatile inflation and volative economic activity. At the end of the sample, the opposite is observed: the Federal Funds Rate were above the Taylor rate from 1979 to 1987. In fact, Paul Volker was appointed as chairman of the Fed in 1979, where he declared he would reduce inflation from 10% ca. through strong tightening of monetary policy. Taylor interprets this as the transition to lower levels of inflation, which required extra tightening to enforce central bank credibility. Since then, the Taylor rule performed relatively well, expect for periods where the zero lower bound was binding: there, the Taylor rule would call for negative funds rate, which could not be supported by the Fed.

In subsequent years, economists tried to estimate precise values for Taylor rules. For instance, in Clarida, Galì and Gertler (QJE 2000) the authors estimate a rule closer to the Fed's actual policy:

$$
i_t = \rho i_{t-1} + (1-\rho) \Big[ r + \pi^* + \beta \mathbb{E}_t [\pi_{t+1} - \pi^*] + \gamma \mathbb{E}_t[y_{t+1} - y^*_{t+1}] \Big]
$$

The main differences from the original Taylor rule are as follows. To begin with, adjustments are partial, which has become a standard for present central bank rules. That is to say, the central bank has some target for its interest rate, but the actual rate is adjusted gradually towards that. Moreover, the central bank does not respond to current values for inflation and output, but in anticipation to future values based on their forecasts. This is consistent with central bank releases about their policy choice. The rule was estimated with instrumental variables (the expectation is substituted by the actual value, which included the error term as th "surprise", which is orthogonal to expectations under the rational expectations assumption and thus is exogenous). Splitting the sample in the pre-Volcker and the Volcker-Greenspan era, it is possible to see how parameters were dramatically shifted, in particular for the $\beta$ growing from 0.83 to 2.15.

If these estimates are taken seriously and embedded in the NK model, the condition for uniqueness of the equilibrium is, however, not satisfied during the pre-Volcker period. Thus, it allows the conjecture that the instability of the pre-Volcker period could be interpreted as the result of a molteplicity of equilibria, being subject to sunspot fluictuation. This is very different from the traditional hypothesis based on fundamentals, such as oil price shocks. Put simply, some fluctuations may be given by revisions of expectations that became self-fulfilling. For example, if agents assumed that inflation would be higher, and the central bank did not increase the nominal rate as much as it should, the real rate would have gone down, stimulating the economy and inducing self-fulfilling inflation. More formally, in the context of this example, suppose some variable follows any path of $x$ satisfying the following equation is an equilibrium:

$$
x_t = \alpha \mathbb{E}_t[x_{t+1}]
$$

For $|\alpha|>1$, this can be rewritten as

$$
\mathbb{E}_t[x_{t+1}] = \frac{1}{\alpha} x_t
$$

which can be solved for stationary fluctuations of

$$
x_{t+1} = \frac{1}{\alpha}x_t + \xi_{t+1}
$$

leading to stationary sunspot equilibria.

Moving forward, Orphanides (JME 2003) made a very important point, which is by now very well understood. Put simply, when researchers estimate interest rate rules, they use data available to the researcher but not to the policymaker: the former operate *ex post*, while the latter makes forecasts *ad interim*. Thus, the author constructed real-time datasets including the values available to policymakers at each point in time (working at the Board of Governors of the Fed, he could access the Green Book which records the most recent estimates and forecasts of the central bank). It emerged that the real-time series related to the final series in a very imperfect way. In particular, in the case of the output gap, deviations were huge. Orphanides computed the interest rate imputed by the Taylor rule using the real-time series and concluded that the real-time series adhered to the Federal Funds Rate. The Fed was not doing the wrong thing: they were following the Taylor rule, but using ill-quality information. (What is starking is that policymakers would basically appear to be using a Taylor rule in the mid '60s, before Taylor published his rule!)
Why did Fed economists make such mistakes about output gaps? The likely answer lies in the notorious **productivity slowdown**: log-GDP in the post-war US had a clear shift in the trend during the 60s — indeed known as the productivity slowdown —, which was ultimately recovered during the 90s and until the GFC. Before the slowdown, output was fluctuating around a trend, and economists working at the Fed assumed that the previous trend would continue in present times. Thus, estimates of the output gap were becoming more and more negatively biased, until the productivity slowdown ultimately became to be captured by data analysis. This would be further grounded by the fact that predictions of inflation were actually on point. Orphanides concludes that there were no significant differences in the coefficients, but rather errors in real-time data.
The Orphanides rule is thus based on nowcasting:

$$
i_t = r + \pi + \phi_\pi (\mathbb{E}_t[\pi_t] - \pi) + \phi_y \mathbb{E}_t[\tilde y_t]
$$

and was updated in 2013 as:

$$
\Delta i_t^{(a)} = 0.5 (\mathbb{E}_t[\pi_{t+4}^{(4)}] - \pi) + 0.5(\mathbb{E}_t[\Delta y_{t+4}^{(4)}] - \Delta y_t^*)
$$

where $\mathbb{E}_t[\pi_{t+4}^{(4)}]$ is the expected inflation over the next four quarters on an annualized basis (note that this is using GDP change and not GDP gap: using GDP change makes the rule more robust, as gross mistakes such as those made by the Fed would be dodged). This is an example of **first-difference rule**, especially used in the Ecentral bank. They use the actual forecasts of professional forecasters to estimate an interval for inflation, and thereby compute an envelope of prescriptions for their simple policy rule, leading to a very good fit with actual data.

<div style="page-break-after: always;"></div>


## Sticky Wages and Unemployment in the New Keynesian Model

In the previous models, it was assumed that labor markets were competitive:

$$
w_{t} - p_{t} = mrs_{t}
$$

For instance, competitiveness in labor markets was implicit in the derivation of the optimality conditions inasmuch as households could supply labor without quantity constraints. From the standpoint of firms, competitiveness was also assumed in that firms could hire labor only *at the market wage*, where both sides were taking wages as given. In contrast, imperfections in the labor markets will be introduced in this chapter. In particular, the assumption of perfect competition in the labor market is dropped.
There are several ways to deviate from perfect competition. A very generic specification may be proposed by defining the gap between the market rate of substitution and the real wage:

$$
w_{t} - p_{t} = \mu_{t}^w + mrs_{t}
$$

where $\text{mrs}_{t} = \sigma c_{t} + \phi n_{t}$ from the household's optimality conditions. This wedge will be referred to as the (log) **wage markup**, the markup of the wage over the rate of substitution in the same way that the price markup was the wedge between actual price and its correspondent in perfect competition. Assume that the markup gap is non-negative (quite unpleasantly, a negative wage markup would suggest that workers are *forced* to work).
Empirically speaking, sources of wage markup may lie in:
- efficiency wages: firms set wages at a higher level than the competitive wage hoping to induce higher (unobservable) effort by workers
- minimum wages
- workers' market power (frictions, unions, [[Advanced Macroeconomics II#Search Models|search and matching models]]), usually implying positive wage markups
In particular, however, our focus will not involve the *existence* of wage markups; whatever their source, we will take their existence for granted and rather focus on the *variations* in wage markups, and the attending effect on economic activity.

A main source of variations in wage markups will lie in **sticky wages**, in the same way as the price markup was affected by sticky prices. Nominal wages are non adjusted continuously, as highlighted by a large body of evidence. The distribution of individual wage changes shows that wages are not adjusted for a large fraction of workers.

![[Twelve-Month Nominal Base Wage Change Distribution.jpg|center|300]]

Similarly, the **WDN survey** (wage dynamics survey) contained in the WDN Final Report (2019) suggests that only a small fraction of workers has their wage adjusted more frequently than once a year, with a majority of workers adjusting every year and a significant fraction which adjusts even less frequently.

### Sticky Wages and Inflation Dynamics

With sticky wages, wage inflation will also be part of the inflation dynamics picture. Recall that inflation was expressed in terms of the price markup gap, where this followed without any specific assumptions on labor market (or other externalities). Let us enrich the picture and assume for simplicity a production function linear in labor, so that the marginal productivity of labor is constant and equal to $A_{t}$ or in logs $a_{t}$ (the nominal marginal cost is thus $\frac{W_{t}}{A_{t}}$):

$$
\begin{align*}
\mu_{t}^p &= p_{t} - (w_{t} - a_{t}) \\
&= a_{t} - \omega_{t} \\
&= a_{t} - (\mu_{t}^w + \sigma c_{t} + \phi n_{t}) \\
&= (1+\phi)a_{t} - (\sigma + \phi)y_{t} - \mu_{t}^w
\end{align*}
$$

where $\omega_{t} = w_{t} - p_{t}$. Under the assumption of flexible prices and flexible wages, markups would be constant both for prices and wages: exploit this assumption to define natural levels of the markups and compute their deviations therefrom:

$$
\mu_{t}^p - \mu^p = -(\sigma + \phi) \tilde{y}_{t} - (\mu_{t}^w - \mu^w)
$$

which ultimately allows to redefined a new implied NKPC:

$$
\begin{align*}
\pi_{t}^p &= \beta \mathbb{E}_{t} [ \pi_{t+1}^p ] - \lambda_{p}(\mu_{t}^p - \mu^p) \\
&=  \beta \mathbb{E}_{t} [ \pi_{t+1}^p ] + \lambda_{p} [ (\sigma + \phi) \tilde{y}_{t} + \mu_{t}^w - \mu^w ] \\
&= \beta \mathbb{E}_{t} [ \pi_{t+1}^p ] + \kappa_{p} \tilde{y}_{t} + \lambda_{p} \hat{\mu}_{t}^w
\end{align*}
$$

where $\lambda_{p} \equiv \frac{(1-\theta)(1-\beta\theta)}{\theta}\Theta$ and $\kappa_{p} \equiv \left( \sigma + \phi \right) \lambda_{p}$, in analogy with the parameter $\kappa$ in the benchmark Phillips curve assuming that $\alpha = 0$, that is $\kappa \equiv \left( \sigma +\frac{\phi+\alpha}{1-\alpha} \right) \lambda$. This highlights a tradeoff between inflation and output gap stabilization. The **Divine Coincidence** result previously derived gets basically lost once wage markups are introduced. In addition, note that this source of inefficiency differs from the cost-push shock NKPC: the cost push involved a difference between natural and efficient levels of output, which could very much coincide in this case. Moreover, cost push is exogenous to monetary policy, whereas in general monetary policy will be able to affect the wage markup.

### A Model with Sticky Wages and Prices

Original reference: [Erceg-Henderson-Levin (JME 2000)](https://bpb-us-e1.wpmucdn.com/sites.dartmouth.edu/dist/5/2061/files/2019/06/Erceg-Henderson-Levin-2000-JME-optimal-policy-with-staggered-contracts.pdf).

The key assumptions in this model, which is built upon the NK model, includes differentiated labor services, which can be interpreted as various "occupations". Each occupation is represented by a union, with some specific market power when setting the wage, facing a labor demand schedule in the same way as firms face a demand for their good.  Lastly, in analogy to price setting, nominal wage setting will also be staggered with constant probability $1-\theta_{w}$.

The representative household's problem involves the term $\{ \mathcal{N}_{t(j)} \}$: that is, each household includes individuals specialized in some specific labor service(s) $j$. Labor income will thus be equal to $\int_{0}^1 W_{t}(j) \mathcal{N}_{t}(j) \,dj$. This induces a difference in budget constraints and utility functions:

$$
U(C_{t},\{\mathcal{N}_{t}(j)\}, Z_{t}) =
\begin{cases}
\left( \frac{C_{t}^{1-\sigma}-1}{1-\sigma} - \int_{0}^1 \frac{\mathcal{N}_{t}(j)^{1+\phi}}{1+\phi} \,dj + \Xi_{t}^\sigma \frac{L_{t}^{1-\sigma}-1}{1-\sigma} \right) Z_{t} & \sigma\neq{1} \\
\left( \log(C_{t}) - \int_{0}^1 \frac{\mathcal{N}_{t}(j)^{1+\phi}}{1+\phi} \,dj + \Xi_{t}^\sigma \log(L_{t}) \right) Z_{t} & \sigma={1}
\end{cases}
$$

where $\{ \mathcal{N}_{t}(j) \}$ taken as given and $\log(Z_{t}) \equiv z_{t} \sim$ AR(1): this implies that the intratemporal optimality condition disappears. In contrast, the optimality conditions simply become:

$$
Q_{t} = \beta \mathbb{E}_{t}\left[  \left(  \frac{C_{t+1}}{C_{t}}^{-\sigma} \right) \left( \frac{Z_{t+1}}{Z_{t}} \right) \left( \frac{P_{t}}{P_{t+1}} \right) \right]
$$

^c2650a

and its log-linearized counterpart:

$$
c_{t} = \mathbb{E}_{t} [c_{t+1}] - \frac{1}{\sigma} ( i_{t} - \mathbb{E}_{t} [\pi_{t+1}^p] - \rho ) + \frac{1}{\sigma} (1 - \rho_{z})z_{t}
$$

The novelty of this model lies in **wage setting**. At each period $t$, a fraction $1-\theta_{w}$ of the unions renegotiates the wage following an optimal resetting rule:

$$
\max_{W_{t}^*} \mathbb{E}_{t} \left[  \sum_{k=0}^\infty (\beta\theta_{w})^k \left( C_{t+k}^{-\sigma} \frac{W^*_{t}}{P_{t+k}} N_{t+k \,|\, t} - \frac{N^{1+\phi}_{t+k\,|\,t}}{1+\phi}  \right) Z_{t+k}  \right]
$$


subject to the labor demand schedule (which will be derived below):

$$
N_{t+k\,|\,t} = \left( \frac{W^*_{t}}{W_{t+k}} \right) ^{-\epsilon_{w}} N_{t}
$$

where $W_{t} \equiv \left(  \int_{0}^1 W_{t}(j)^{1-\epsilon_{w}} \,dj  \right)^{\frac{1}{1-\epsilon_{w}}}$. Note that:

$$
\begin{align*}
N_{t+k|t} &= \left( \frac{W^*_{t}}{W_{t+k}} \right) ^{-\epsilon_{w}} N_{t} \\
&= (W_t^*)^{-\epsilon_w} (W_{t+k})^{\epsilon_w} N_{t}\\
\frac{\partial N_{t+k|t}}{\partial W_t^*} &= \frac{\partial}{\partial W_t^*} \left[ (W_t^*)^{-\epsilon_w} (W_{t+k})^{\epsilon_w} N_{t} \right] \\
&= -\epsilon_w (W_t^*)^{-\epsilon_w-1} (W_{t+k})^{\epsilon_w} N_{t} \\
&= -\epsilon_w (W_t^*)^{-\epsilon_w-1} \left( N_{t+k|t} (W_t^*)^{\epsilon_w} \right) \\
&= -\epsilon_w (W_t^*)^{-\epsilon_w-1+\epsilon_w} N_{t+k|t} \\
&= -\epsilon_w (W_t^*)^{-1} N_{t+k|t} \\
&= -\epsilon_w \frac{N_{t+k|t}}{W_t^*}
\end{align*}
$$

This is needed to derived the FOC applying the chain rule. The associated FOC can be found searching for the optimal labor supply of the household provided that the wage is resettled at time $t$. At each time $t+k$, it must hold that:

$$
\begin{align*}
\mathbb{E}_{t} \left[ \frac{ \partial  }{ \partial W^*_{t} } \left( C_{t+k}^{-\sigma} \frac{W^*_{t}}{P_{t+k}} N_{t+k \,|\, t} - \frac{N^{1+\phi}_{t+k\,|\,t}}{1+\phi}  \right) Z_{t+k}  \right] &= 0 
\\
\mathbb{E}_{t} \left[ \left( \frac{C_{t+k}^{-\sigma}}{P_{t+k}}  \left( N_{t+k\,|\,t}- \epsilon_w N_{t+k\,|\,t}  \right) - \left( N^{\phi}_{t+k\,|\,t} \left( -\epsilon_{w} \frac{N_{t+k\,|\,t}}{W^*} \right)  \right)  \right) Z_{t+k}  \right] &= 0
\\
\mathbb{E}_{t} \left[ \left( \frac{C_{t+k}^{-\sigma}}{P_{t+k}} N_{t+k\,|\,t} (1- \epsilon_{w}) + \epsilon_{w} \frac{N_{t+k\,|\,t}^{1+\phi}}{W^*}  \right) Z_{t+k}  \right] &= 0
\end{align*}
$$

where the second line expands the product rule (left-hand term) and the chain rule (right-hand term). Let $U_{c,t+k} = C_{t+k}^{-\sigma} Z_{t+k}$ and $MRS_{t+k|t} = C_{t+k}^{\sigma} N_{t+k|t}^{\phi}$, which implies $N_{t+k|t}^{\phi} Z_{t+k} = MRS_{t+k|t} C_{t+k}^{-\sigma} Z_{t+k} = MRS_{t+k|t} U_{c,t+k}$. Then:

$$
\begin{align*}
\mathbb{E}_{t} \left[ U_{c,t+k} \frac{N_{t+k|t}}{P_{t+k}} \frac{\epsilon_{w}}{\mathcal{M}_{w} } + \epsilon_w \frac{N_{t+k|t} MRS_{t+k|t} U_{c,t+k}}{W_t^*} \right] &= 0
\\
\mathbb{E}_{t} \left[\frac{N_{t+k|t} U_{c,t+k}}{W_t^*} \left( \frac{\epsilon_{w}}{\mathcal{M}_{w} } \frac{W_t^*}{P_{t+k}} + \epsilon_w MRS_{t+k|t} \right) \right] &= 0 
\\
\mathbb{E}_{t} \left[ \frac{N_{t+k|t} U_{c,t+k} \epsilon_w}{W_t^*} \left( MRS_{t+k|t} - \frac{1}{\mathcal{M}_{w} } \frac{W_t^*}{P_{t+k}} \right) \right] &= 0
\\
\mathbb{E}_{t} \left[ \frac{N_{t+k|t} U_{c,t+k}}{W_t^*} \left( MRS_{t+k|t} - \frac{1}{\mathcal{M}_{w} } \frac{W_t^*}{P_{t+k}} \right) \right] &= 0
\\
\mathbb{E}_{t} \left[ \frac{N_{t+k|t} U_{c,t+k}}{W_t^*} \left( \frac{W_t^*}{P_{t+k}} - \mathcal{M}_w MRS_{t+k|t} \right) \right] &= 0  \\
\mathbb{E}_{t} \left[ N_{t+k|t} C_{t+k}^{-\sigma} Z_{t+k} \left( \frac{W_t^*}{P_{t+k}} - \mathcal{M}_w MRS_{t+k|t} \right) \right] &= 0 
\end{align*}
$$

where $\epsilon_{w}$ and $W_{t}^*$ could be taken out of the expectation since the former is a constant and the latter is known (and indeed, set) at time $t$.
Put simply, the union maximizes the contribution that each occupation makes to the household — the easiest way to define and implement this objective function. This is given by the employment of such occupation in period $t+k$ times the corresponding wage. Putting together all the future streams of FOCs:

$$
\sum_{k=0}^\infty (\beta\theta_{w})^k \mathbb{E}_{t} \left[ N_{t+k|t} C_{t+k}^{-\sigma} Z_{t+k} \left( \frac{W_t^*}{P_{t+k}} - \mathcal{M}_w MRS_{t+k|t} \right) \right] = 0 
$$

Our ultimate goal is to derive a function which, given employment (set by firms) and a marginal rate of substitution, defines how the wage behaves. This differs from perfect competition, where wage was fixed and workers defined their own labor supply.

As an alternative solution method[^3], solve the wage-setting equation assuming flexible wages and deriving the first order conditions with respect to $W_{t}(i)$, imposing the constraint only afterwards:

$$
\begin{align*}
\frac{C_{t}^{-\sigma}}{P_{t}} \left[  N_{t}(j) + W_{t}(j) \frac{d N_{t}(j)}{ d W_{t}(j)}  \right] - N_{t}(j)^{\phi} \frac{dN_{t}(j)}{dW_{t}(j)} &= 0 %% \\
\\
\frac{C_{t}^{-\sigma}}{P_{t}} N_{t}(j) \left[ 1 + \frac{W_{t}(j)}{N_{t}(j)} \frac{d N_{t}(j)}{ d W_{t}(j)} \frac{W_{t}(j)}{N_{t}(j)} \right] - N_{t}(j)^{\phi} \frac{dN_{t}(j)}{dW_{t}(j)} \frac{W_{t}(j)}{N_{t}(j)} &= 0 %% \\
\\
\frac{C_{t}^{-\sigma}}{P_{t}} \left[ 1 + \frac{W_{t}(j)}{N_{t}(j)} \underbrace{ \frac{d N_{t}(j)}{ d W_{t}(j)} \frac{W_{t}(j)}{N_{t}(j)} }_{-\epsilon_{w}} \right] - \underbrace{ \frac{dN_{t}(j)}{dW_{t}(j)} \frac{W_{t}(j)}{N_{t}(j)} }_{-\epsilon_{w}} &= 0 %% \\
\\ %% \\
\frac{W_{t}(j)}{P_{t}} ( 1- \epsilon_{w} ) + C_{t}^{\sigma} N_{t}^\phi(j) \epsilon_{w} &= 0 %% \\
\\
\frac{W_{t}(j)}{P_{t}} &= \underbrace{ \frac{\epsilon_{w}}{\epsilon_{w} - 1} }_{\mathcal{M}_{t}^m } \quad \underbrace{ C_{t}^{\sigma} N_{t}(j)^\phi }_{MRS_{t}} %% \\
\\ %% \\
w_{t}^* - p_{t} &= \mu_{t}^w +\sigma c_{t} + \phi n_{t}(j)
\end{align*}
$$
Plug this solution into the stream of profits and, in a way analogous to the baseline case, define the following objects:

$$
\begin{align*}
w_{t}(j) &= \mu_{w} + mrs_{t}(j) + p_{t} \\
mrs_{t+k} &= \sigma c_{t+k} + \phi n_{t+k} \\
mrs_{t+k \,|\, t} &= \sigma c_{t+k} + \phi n_{t+k \,|\, t}
\end{align*}
$$

To find the equation for the optimal wage, log-linearizing the term $\left( \frac{W_t^*}{P_{t+k}} - \mathcal{M}_w MRS_{t+k|t} \right)$ around the steady state where it is zero gives $\approx \overline{\left(\frac{W}{P}\right)} \left[ (w_t^* - \bar{w}) - (p_{t+k} - \bar{p}) - (\mu_w - \bar{\mu}_w) - (mrs_{t+k|t} - \overline{mrs}) \right]$ . Ultimately, the equation for the optimal wage looks familiar.

$$
\begin{align*}
0 &= \sum_{k=0}^{\infty} (\beta\theta_w)^k \mathbb{E}_t \left[ (w_t^* - \bar{w}) - (p_{t+k} - \bar{p}) - (mrs_{t+k|t} - \overline{mrs}) \right]
\\
w_t^* - \bar{w} &= (1-\beta\theta_w) \sum_{k=0}^{\infty} (\beta\theta_w)^k \mathbb{E}_t \left[ (p_{t+k} - \bar{p}) + (mrs_{t+k|t} - \overline{mrs}) \right] \\
&= (1-\beta\theta_w) \sum_{k=0}^{\infty} (\beta\theta_w)^k \mathbb{E}_t [p_{t+k} + mrs_{t+k|t}] - (1-\beta\theta_w) \sum_{k=0}^{\infty} (\beta\theta_w)^k (\bar{p} + \overline{mrs}) \\
&= (1-\beta\theta_w) \sum_{k=0}^{\infty} (\beta\theta_w)^k \mathbb{E}_t [p_{t+k} + mrs_{t+k|t}] - (\bar{p} + \overline{mrs}) \\
w_t^* - (\mu_w + \bar{p} + \overline{mrs}) &= (1-\beta\theta_w) \sum_{k=0}^{\infty} (\beta\theta_w)^k \mathbb{E}_t [p_{t+k} + mrs_{t+k|t}] - (\bar{p} + \overline{mrs}) \\
w_t^* &= \mu_w + \bar{p} + \overline{mrs} - (\bar{p} + \overline{mrs}) + (1-\beta\theta_w) \sum_{k=0}^{\infty} (\beta\theta_w)^k \mathbb{E}_t [p_{t+k} + mrs_{t+k|t}] \\
w_t^* &= \mu_w + (1-\beta\theta_w) \sum_{k=0}^{\infty} (\beta\theta_w)^k \mathbb{E}_t [p_{t+k} + mrs_{t+k|t}]
\end{align*}
$$

where $\mu^w = \log(\mathcal{M}_{w})$ and $\mathcal{M}_{w} = \frac{\epsilon_{w}}{\epsilon_{w} - 1}$ and $mrs_{t+k\,|\,t} \equiv \sigma c_{t+k} + \phi n_{t+k \,|\,t}$. The optimal wage is forward looking: if prices or the marginal rate of substitution are expected to increase, the union recognizes that prices can be updated only occasionally and thus takes advantage of their reset time to impose a higher wage.
Together with the wage setting rule, the usual wage dynamics hold, that is $w_{t} = \theta_{w} w_{t-1} + (1-\theta_{w})w_{t}^*$, as well as the NKPC analogous, the wage inflation equation:

$$
\pi_{t}^w = \beta \mathbb{E}_{t} [\pi_{t+1}^w] - \lambda_{w} (\mu_{t}^w - \mu^w)
$$

where $\lambda_{w} \equiv \frac{(1-\beta\theta_{w}) (1-\theta_{w})}{\theta_{w} (1 + \phi \epsilon_{w})}$.

As in the basic NK model, firms produce a final good with technology $Y_{t}(i) = A_{t} N_{t}(i)^{1-\alpha}$ and $\log A_{t} \equiv a_{t}\sim$ AR(1). However, there is an **effective labor input index**, which involves the integration of the types of labor services under CES assumption:

$$
N_{t}(i) = \left( \int_{0}^1 N_{t} (i,j) ^{\frac{e_{w} - 1}{e_{w}}} \,dj \right)^{\frac{\epsilon_{w}}{\epsilon_{w}-1}}
$$

A firm maximizing profits will, in a first stage, choose optimally the composition and quantities of the labor services, for any given level of the effective labor input. That is, taking $N_{t}(i)$ as given for any level of $N_{t}(i)$, the cost minimization occurs at:

$$
N_{t}(i,j) = \left(  \frac{W_{t}(j)}{W_{t}}  \right)^{-\epsilon_{w}} N_{t}(i)
$$

The implication is that the cost for the firm is equal to the wage index weighted by their composition of labor:

$$
\int_{0}^1 W_{t}(j) N_{t}(i,j) \,dj = W_{t} N_{t} (i)
$$

while the rest of the derivation for the firm problem is the same as in the baseline model.
Price setting also works in the same way as in the benchmark NK model.
#### Equilibrium

As usual, markets clear in equilibrium. For the final good market, this means $Y_{t}=C_{t}$. Let us turn to the labor market. Aggregate employment is obtained by aggregating hours of work from all firms and occupations. The goal is to write as a function of aggregate output:

$$
\begin{align*}
N_{t} &\equiv \int_{0}^1 \int_{0}^1 N_{t} (i,j) \,dj \,di \\
\\
&= \int_{0}^1 N_{t}(i) \int_{0}^1 \frac{N_{t}(i,j)}{N_{t}(i)} \,dj\,di
\\
&= \Delta_{w,t} \int_{0}^1 N_{t}(i) \,di
\\
&= \Delta_{w,t} \left(  \frac{Y_{t}}{A_{t} } \right)^{\frac{1}{1-\alpha}} \int_{0}^1 \left(  \frac{Y_{t}(i)}{Y_{t}} \right)^{\frac{1}{1-\alpha}} \,di \\
&= \Delta_{w,t} \Delta_{p,t} \left(  \frac{Y_{t}}{A_{t} } \right)^{\frac{1}{1-\alpha}}
\end{align*}
$$

where the $\Delta$ are indices of wage and price dispersion.

$$
\begin{cases}
\Delta_{w,t} \equiv \int_{0}^1 \left(  \frac{W_{t}(j)}{W_{t}}  \right)^{- \epsilon_{w}} \\
\Delta_{p,t} \equiv \int_{0}^1 \left(  \frac{P_{t}(i)}{P_{t}}  \right)^{\frac{-\epsilon_{p}}{1-\alpha}}
\end{cases}
$$

which implies that the following relation between aggregate output and aggregate employment holds:

$$
(1-\alpha)n_{t} = y_{t} - a_{t} + d_{w,t} + d_{p,t}
$$

where $d_{w,t} \equiv \log \left [ \int_{0}^1 \left(  \frac{W_{t}(j)}{W_{t}}  \right)^{- \epsilon_{w}} \right ]$ and $d_{p,t}\equiv \log \left [ \int_{0}^1 \left(  \frac{P_{t}(i)}{P_{t}}  \right)^{\frac{-\epsilon_{p}}{1-\alpha}} \right ]$. As shown in the derivation of [[#^b5b102|price dispersion]], these are approximately equal to $\frac{\epsilon_{p}}{2\Theta}\text{var}(p_{t}(i))$ (which is exactly the same derivation) and $\frac{(1-\alpha)\epsilon_{w}}{2}\text{var}_{j}(w_{t}(i))$ (a similar argument). Up to a first order approximation, it holds that:

$$
(1-\alpha) n_{t} = y_{t} - a_{t}
$$

As we will see, this is the mechanism behind the losses for price inflation and wage inflation. 

To find a new version of the equations for price and wage inflation, note that the output gap is based on natural output, which should now be understood with reference to equilibrium levels of both flexible prices and flexible wages. Let us define a new object, the wage gap:

> [!definition] Wage Gap
> 
> $$
> \tilde{\omega}_{t} \equiv \omega_{t} - \omega_{t}^n
> $$
> 
> where $\omega_{t} \equiv w_{t} - p_{t}$ and $\omega_{t}^n$ is the natural real wage (determined below).

$$
\begin{align*}
\omega_{t}^n &= \log(1-\alpha) + (a_{t} - \alpha n_{t}^n) - \mu^p \\
&= \log(1-\alpha) + \psi_{we}a_{t} - \mu^p
\end{align*}
$$

with $\psi_{wa}\equiv \frac{1-\alpha\psi_{ya}}{1-\alpha}$ and $\psi_{ya} = \frac{1+\phi}{\sigma(1-\alpha) + \phi + \alpha}$ as in the NK model. The price markup gap can be derived, so as to obtain a new implied price inflation equation.

$$
\begin{align*}
\begin{cases}
\mu_{t}^w &= \log(1-\alpha) + (a_{t} - \alpha n_{t}) - \omega_{t} \\
\mu^p &= \log(1-\alpha) + (a_{t} - \alpha n_{t}^n) - \omega_{t}^n 
\end{cases}
\quad\implies\quad
\hat{\mu}_{t}^p &= (mpn_{t} - \omega_{t}) - \mu^p \\
&= (\tilde{y}_{t} - \tilde{n}_{t}) - \tilde{\omega}_{t} \\
&= - \frac{\alpha}{1-\alpha} \tilde{y}_{t} - \tilde{\omega}_{t}
\end{align*}
$$

The novelty is that price inflation will now depend also on the markup gap. In fact, the implied price inflation equation is as follows:

$$
\pi_{t}^p = \beta \mathbb{E}_{t} [p_{t+1}] + \varkappa \tilde{y}_{t} + \lambda_{p} \tilde{\omega}_{t}
$$

^ae3eed

where $\varkappa \equiv \frac{\alpha\lambda_{p}}{1-\alpha}$. Similarly, the wage markup gap will imply a new wage inflation equation. The markup gap results as:

$$
\begin{align*}
\hat{\mu}_{t}^w &= \omega_{t} - {mrs}_{t} - \mu^w \\
&= \tilde{\omega}_{t} - (\sigma \tilde{y}_{t} + \phi \tilde{n}_{t}) \\
&= \tilde{\omega}_{t} - \left(  \sigma + \frac{\phi}{1-\alpha} \right) \tilde{y}_{t}
\end{align*}
$$

And the wage inflation in terms of the output and real wage gaps:

$$
\pi_{t}^w = \beta \mathbb{E}_{t} [ \pi_{t+1}^w ] + \varkappa_{w} \tilde{y}_{t} - \lambda_{w} \tilde{\omega}_{t}
$$

^68c52c

where $\varkappa_{w} \equiv \lambda_{w} \left(  \sigma - \frac{\phi}{1-\alpha} \right)$.
In addition, there is an identity relating the changes in the wage gap to price inflation, wage inflation, and the natural wage:

$$
\tilde{\omega}_{t} \equiv \tilde{\omega}_{t-1} + \pi^w_{t} - \pi_{t}^p - \Delta \omega_{t}^n
$$

^faca40

In order to complete the nonpolicy block of the model, the previous equilibrium conditions (that is, [[#^ae3eed]], [[#^68c52c]] and [[#^faca40]] ) must be supplemented with a Dynamic IS equation similar to the previous and derived from the goods market clearing condition combined with the Euler [[#^c2650a]]:

$$
\tilde{y}_{t} = -\frac{1}{\sigma} ( i_{t} - \mathbb{E}_{t} [\pi_{t+1}^p] - r_{t}^n ) + \mathbb{E}_{t} [\tilde{y}_{t+1}]
$$

^89f626

which involves the natural interest rate $r_{t}^n \equiv \rho - \sigma(1-\rho_{a}) \psi_{ya} a_{t} + (1-\rho_{z}) z_{t}$. Its derivation is similar to [[#^6083fa]] and should be interpreted as the prevailing real rate in an equilibrium with flexible wages and flexible prices.
For a solution to the model, also assume that the interest rate follows the following simple rule:

$$
i_{t} = \rho + \phi_{p} \pi_{t}^p + \phi_{w} \pi_{t}^w + \phi_{y} \hat{y}_{t} + v_{t}
$$

where $v_{t}$ is the usual exogenous component with zero mean. This can be plugged into [[#^89f626]]  so as to get rid of the interest rate. In a similar vein as in the benchmark model, represent this dynamic system in the following form:

$$
\boldsymbol{\mathbf{A}}_{0}^w \boldsymbol{\mathbf{x}}_{t} = \boldsymbol{\mathbf{A}}_{\boldsymbol{\mathbf{1}}}^w \mathbb{E}_{t} [ \boldsymbol{\mathbf{x}}_{t+1} ] + \boldsymbol{\mathbf{B}}_{0}^w \boldsymbol{\mathbf{u}}_{t}
$$

^c33f84

where $\boldsymbol{\mathbf{x}}_{t} \equiv [ \tilde{y}_{t}, \pi_{t}^p , \pi_{t}^w, \tilde{\omega}_{t-1}]^\intercal$, $\boldsymbol{\mathbf{u}}_{t} \equiv [ \hat{r}_{t}^n - v_{t} - \phi_{t} \hat{y}_{t}^n, \Delta \omega_{t}^n ]^\intercal$, and the matrices are:

$$
\boldsymbol{\mathbf{A}}_{0}^w \equiv
\begin{bmatrix}
\sigma + \phi_{t} & \phi_{p} & \phi_{w} & 0 \\
-\varkappa_{p} & 1 & 0 & 0 \\
-\varkappa_{w} & 0 & 1 & 0 \\
0 & -1 & 1 & 1
\end{bmatrix}
\qquad
\boldsymbol{\mathbf{A}}_{\boldsymbol{\mathbf{1}}}^w \equiv
\begin{bmatrix}
\sigma & 1 & 0 & 0 \\
0 & \beta & 0 & \lambda_{p} \\
0 & 0 & \beta & \lambda_{w} \\
0 & 0 & 0 & 1
\end{bmatrix}
\qquad
\boldsymbol{\mathbf{B}}_{0}^w \equiv
\begin{bmatrix}
1 & 0 \\
0 & 0 \\
0 & 0 \\
0 & 1
\end{bmatrix}
$$

Note that [[#^c33f84]] may not have a solution satisfying $\tilde{y}_{t} = \pi_{t}^p = \pi_{t}^w = 0$ at all points (details are excruciating and contained in the textbook). Moreover, local uniqueness that three eigenvalues lie inside and one eigenvalue lies outside the unit circle for the matrix $\boldsymbol{\mathbf{A}}^w\equiv (\boldsymbol{\mathbf{A}}_{0}^w)^{-1} \boldsymbol{\mathbf{A}}_{\boldsymbol{\mathbf{1}}}^w$. The solution is:

$$
\phi_{p} + \phi_{w} + \phi_{y} \left(  \frac{1 - \beta}{ \sigma + \frac{\alpha + \phi}{1-\alpha} }  \right) \left( \frac{1}{\lambda_{p}} + \frac{1}{\lambda_{w}} \right) > 1
$$

which for $\phi_{y}=0$ simplifies to $\phi_{p} + \phi_{w} > 1$. **The central bank must adjust the nominal rate more than one-for-one in response to variations in any arbitrary weighted average price and wage inflation**.
#### Dynamic Responses to a Monetary Policy Shock

Assume a tightening of monetary policy, i.e. a positive realization of $v_t$. In all cases there is a recession, a persistent reduction in output, with the strongest response in the baseline case (with both sticky wages and prices), but similar patterns along the three.

![[Sticky wages, monetary policy shocl.png|center|300]]

The main differences are, obviously, in the responses to price inflation and wage inflation. When prices are flexible, the decrease in price inflation is larger. Note that, in the baseline case, there is also no decline in price inflation. As for wage inflation, the largest responce obviously occurs when wages are flexible. Last, the response of the real wage is very different across models. In the baseline case, price and wage inflation hardly change... not surprisingly: in the baseline, both are sticky. **Why do sticky wages reduce the response of price inflation?** Why do they induce some additional endogenous stickyness in prices? Recall the optimal price setting conditions: firms set prices based on expected marginal costs. Sticky wages are an important component of marginal costs: firms will not respond so strongly if wages do not move and marginal costs do not soar. As for wages, unions reset wages based on current and expected marginal rates of substitution and, importantly, prices. If prices are sticky, then also the reset optimal wage becomes stickier. Combine the two, a positive feedback generates the reinforcement loop leading to the tiny responses of real wages and inflation in the simulated models.

Real wages also exhibit cyclical behavior. Depending on the models, they can be cyclical, procyclical, or countercyclical: this depends basically on the relative stickiness of wages and prices. An insightful connection with the history of economic thought can be sketched. A key message of [[The General Theory of Occupation, Interest, and Money]] is that fluctuations are basically driven by *demand shocks*. In Keynes's framework, he was basically emphasizing sticky wages, assuming flexible prices. An implication of such a model is that the real wage is countercyclical, as the previous numerical simulations suggest. In response, a number of authors critized the General Theory on the grounds that real wages were, empirically, not countercyclical but rather procyclical. When the New Keynesian models emerged, the problem of the old Keynesian models was finally understood, leading NK authors to focus initially on price stickiness in particular: to get procyclical real wage, prices have to be sufficiently sticky relative to wages. Later on, however, especially as a result of the work by Blanchard and Kiyotaki, it became very clear that both prices and wages could be sticky, and any type of cyclicality could be generated with a suitable calibration of the relative rigidity of the two.

#### Dynamic Responses to a Technology Shock under the Optimal Monetary Policy

For simplicity, assume that the steady state is efficient. How can the steady state be efficient with monopolistic firms and labor unions market power? Implicitly, assumes that the inefficiencies introduced by market power are corrected by some instruments different than monetary policy. The easiest device is introducing a subsidy for unemployment. An example may be as follows:

$$
\begin{cases}
P_{t} = \mathcal{M}_{p} \frac{W_{t} (1-\tau)}{MPN_{t}} \quad\implies\quad \Omega = \frac{MPN_{t}}{\mathcal{M}_{p} (1-\tau)} \\
\Omega = \mathcal{M}_{w} MRS \\
\mathcal{M}_{p} \mathcal{M}_{w}(1-\tau) MRS_{t} = MRS_{t}
\end{cases}
$$

In order to make the steady state efficient, it must be that $\mathcal{M}_{p} \mathcal{M}_{w} (1-\tau) = 1$.

Consider a second order approximation to the utility losses of the representative household with sticky prices and wages in an efficient steady state:

$$
\min \tfrac{1}{2} \mathbb{E}_{0} \sum_{t=0}^\infty \beta^t \left[  \left( \sigma + \tfrac{\phi + \alpha}{1-\alpha} \right) \tilde{y}^2 + \tfrac{\epsilon_{p}}{\lambda_{p}} (\pi_{t}^p)^2 + \tfrac{\epsilon_{w} (1-\alpha)}{\lambda_{w}} (\pi_{t}^w)^2  \right] \quad\text{ subject to }
\begin{cases}
\pi_{t}^p &= \beta \mathbb{E}_{t} [\pi_{t+1}^w] + \varkappa_{p} \tilde{y}_{t} + \lambda_{p} \tilde{\omega}_{t} \\
\pi_{t}^w &= \beta \mathbb{E}_{t} [\pi_{t+1}^p] + \varkappa_{w} \tilde{y}_{t} + \lambda_{w} \tilde{\omega}_{t}  \\
\tilde{\omega}_{t-1} &\equiv \tilde{\omega}_{t} - \pi_{t}^w + \pi_{t}^p + \Delta \omega_{t}^n
\end{cases}
$$

This is equivalent to assuming that the natural equilibrium is efficient: in fact, once market power is corrected through the subsidy, then the natural equilibrium is efficient. In general, it is not feasible in this model to replicate the natural equilibrium, while it is feasible only under restrictive conditions. Still, suppose we replicate the natural equilibrium. Output gap would be 0, and thus also price inflation would be 0. Finally, wage inflation would also be 0 (both inflations at 0 is consistent with the desired markup realization). This forces the natural real wage to be constant (each of its addends would be 0), which is a very restrictive case. Thus, optimal policy is unlikely to follow the simple rule and stabilizing these variables altogether.

To solve for this, set up the Lagrangian with the three constraints and multipliers. Deriving the FOC and the derivative of the Lagrangian relative to the output gap, the following optimality conditions are obtained:

$$
\begin{cases}
\left( \sigma + \frac{\phi + \alpha}{1 - \alpha} \right) \tilde{y}_{t} + \varkappa_{p} \zeta_{1,t} + \varkappa \zeta_{2,t} = 0 \\
\frac{\epsilon_{p}}{\lambda_{p}} \pi_{t}^p - \Delta \zeta_{1,t} + \zeta_{3,t} = 0 \\
\frac{\epsilon_{w}(1-\alpha)}{\lambda_{w}} \pi_{t}^w - \Delta \zeta_{1,t} - \zeta_{3,t} = 0
\end{cases}
$$

Keep in mind that, in equilibrium, the Lagrangian multipliers must be 0, and $\tilde{\omega}_{0-1}$ is given. This leads to a linear system of seven different equations including the Lagrangian multipliers (they cannot be eliminated as in the classical model). Rewrite the system in matrix form:

$$
\boldsymbol{\mathbf{A}}_{0}^* \boldsymbol{\mathbf{x}}_{t} = \boldsymbol{\mathbf{A}}_{1}^* \mathbb{E}_{t} [ \boldsymbol{\mathbf{x}}_{t+1} ] + \boldsymbol{\mathbf{B}}_{0}^* \Delta a_{t}
$$

where $\boldsymbol{\mathbf{x}}_{t} \equiv [\tilde{y}_{t}, \pi_{t}^p, \pi_{t}^w, \tilde{\omega}_{t-1}, \zeta_{1,t-1}, \zeta_{2,t-1}, \zeta_{3,t}]^\intercal$. The driving force lies in $\Delta \omega_{t}^n$, which explains why $\Delta a_{t}$ figures on the right hand side (?). The preference shock, instead, does not appear and remains implicit in the Dynamic IS equation. Annihilating the shocks:

$$
\boldsymbol{\mathbf{A}}_{0}^* \boldsymbol{\mathbf{x}}_{t} = \boldsymbol{\mathbf{A}}_{1}^* \mathbb{E}_{t} [ \boldsymbol{\mathbf{x}}_{t+1} ]
$$

With the additionall assumption that $\tilde{\omega}_{t-1}=0$, the solution to this system would be that $x_{t}=0$ for all $t$ (recall that the given starting value $\omega_{0-1}$ must also be 0 for this condition to be satisfied). To implement this, solve for the suitable nominal interest rate from the Dynamic IS equation:

$$
i_{t} = r_{t}^n + \phi_{p} \pi_{t}^p
$$

where $r_{t}^n = \rho + (1-\rho_{z})z_{t}$ and $\phi_{p}>1$ leads to a unique solution to the difference equation in the vector $\boldsymbol{\mathbf{0}}$.

![[Sticky wages, (optimal) monetary policy shock.png|center|300]]

The optimal policy fully stabilizes output gap and inflations. With flexible prices and sticky wages can still replicate the natural equilibrium: price inflation jumps so that the real wage tracks the natural real wage. In formulae, this corresponds to $\lambda_{p} \to \infty$ in the minimization problem, so that price inflation doesn't matter (in general, when prices are flexible, price inflation does not induce any welfare losses): prices take the burden of adjusting the real wage, in a costless way. In the baseline (sticky) calibration, the output gap exhibits a small deviation, with some negative price inflation and some positive wage inflation. This makes it possible for the real wage to increase very slightly: but far from matching the natural real wage, which would require a much larger positive (negative) wage (price) inflation.

It turns out that a policy that stabilizes the output gap in this model is not only *approximately* optimal. It is possible to show that for a particular calibration for parameter values is *exactly* optimal. But it is also true that a policy fully stabilizing the output gap is not far from the optimal policy. This has an interesting implication: In particular, a linear combination of the two Phillips curves would eliminate the wage gap, which is the problematic variable for policy purposes (being unobservable). In fact:

$$
\begin{gather}
\frac{\lambda_{w}}{\lambda_{p} + \lambda_{w}} \pi_{t}^p = \beta \mathbb{E}_{t} [ \frac{\lambda_{w}}{\lambda_{p} + \lambda_{w}} \pi_{t+1}^p ] + \frac{\lambda_{w} \varkappa_{p}}{\lambda_{p} + \lambda_{w}} \tilde{ y}_{t} + \frac{\lambda_{w} \lambda_{p}}{\lambda_{p} + \lambda_{w}} \tilde{\omega}_{t}
\\
\frac{\lambda_{p}}{\lambda_{p} + \lambda_{w}} \pi_{t}^w = \beta \mathbb{E}_{t} [ \frac{\lambda_{p}}{\lambda_{p} + \lambda_{w}} \pi_{t+1}^p ] + \frac{\lambda_{p} \varkappa_{w}}{\lambda_{p} + \lambda_{w}} \tilde{ y}_{t} + \frac{\lambda_{w} \lambda_{p}}{\lambda_{p} + \lambda_{w}} \tilde{\omega}_{t}
\\
\pi_{t} \equiv \frac{\lambda_{w}}{\lambda_{p} + \lambda_{w}} \pi_{t}^p + \frac{\lambda_{p}}{\lambda_{p} + \lambda_{w}} \pi_{t}^w
\\
\pi_{t} = \beta \mathbb{E}_{t} [\pi_{t+1}] + \kappa \tilde{y}_{t}
\end{gather}
$$

In this "composite" inflation, the Divine Coincidence holds back again: stabilizing output gap corresponds to stabilizing some weighted average of price inflation and wage inflation.

### Unemployment

An alternative formulation of the model can highlight the role of unemployment rates into the model. The model is the same, and so will be all the equations described so far. There will be, however, an additional equation incorporating unemployment.
Assume a representative household with a continuum of members employed in different sector: index the household as $(j,s) \in [0,1] \times [0,1]$, where $j$ is the labor sector. Moreover, assume that an individual is indivisible: either works (fully) or doesn't work. The disutility from working is denoted as $\xi_{t} s^\phi$ for $s\in [0,1]$ and $\phi \ge 0$. The household fully share consumption risk, and their utility function is:

$$
\mathbb{E}_{0} \sum_{t=0}^\infty \beta^t U ( C_{t}, \{ \mathcal{N}_{t}(j)\} ; Z_{t}  )
$$

where the structural form of the utility function may be specified as:

$$
\begin{align*}
U ( C_{t}, \{ \mathcal{N}_{t}(j)\} ; Z_{t}  ) &\equiv \left(  \frac{C_{t}^{1-\sigma} - 1}{1-\sigma} - \chi \int_{0}^1 \int_{0}^{\mathcal{N}_{t}(j)} s^\phi \,ds\,dj  \right)
\\
&= \left(  \frac{C_{t}^{1-\sigma} - 1}{1-\sigma} - \chi \int_{0}^1 \int_{0}^{\mathcal{N}_{t}(j)} \left[  \frac{ s^{1+\phi} }{1 + \phi}  \right] _{s=0} ^{s = \mathcal{N}_{t}(j)} \,dj  \right)
\\
&= \left(  \frac{C_{t}^{1-\sigma} - 1}{1-\sigma} - \chi \int_{0}^1 \frac{\mathcal{N}_{t}(j)^{1+\phi}}{1+\phi} \,dj  \right)
\end{align*}
$$

with optimality conditions similar to [[#^c2650a]].

When does an individual participate in the labor market? Given the wage prevailing for their occupation, the utility brought to the household by a worker is the real wage times the utility generated to the household. This must be larger than their own disutility from working: $C_{t}^{-\sigma} \frac{W_{t}(j)}{P_{t}} \geq \chi_{t} s^\phi$. The marginal participant in the labor market is that worker is sector $j$ such that $C_{t}^{-\sigma} \frac{W_{t}(j)}{P_{t}} = \chi_{t} L_{t}(j)^\phi$. Taking logs and integrating over $j$, this leads to the average wage:

$$
w_{t} - p_{t} = \sigma c_{t} + \phi l_{t} + \xi_{t}
$$

where $w_{t} \equiv \int_{0}^1 w_{t}(j) \,dj$ and the log labor force $l_{t} \equiv \int_{0}^1 l_{t}(j) \, dx$ with $\xi_{t} = \log(\chi_{t})$.
Last, define th unemployment rate as $u_{t} \equiv l_{t} - n_{t} \approx \frac{L_{t} - N_{t}}{N_{t}}$. Note that this is not the way official statistics measure unemployment, which is rather equal to $\frac{L_{t} - N_{t}}{ L_{t}}$ (the two are still similar for small values).

Define unemployment as $u_{t} \equiv l_{t} - n_{t}$. Based on the average markup, obtain:

$$
\begin{align*}
\mu_{t}^w &= (w_{t} - p_{t}) - (\sigma c_{t} + \phi n_{t} + \xi_{t}) \\
&= \phi u_{t}
\end{align*}
$$

where an unemployment similar to that computed by national agencies is proportional to the wage markup.

``` tikz
\usetikzlibrary{arrows.meta, calc, decorations.pathreplacing}

\begin{document}
\begin{tikzpicture}[scale=0.7, every node/.style={scale=0.9}]

    % Define coordinates
    \coordinate (O) at (0,0);
    \coordinate (nt_x_val) at (3,0);        % n_t on x-axis
    \coordinate (lt_x_val) at (7,0);        % l_t on x-axis
    \coordinate (wage_level_on_y) at (0,4); % w_t-p_t on y-axis
    \coordinate (E) at (3,4);               % Equilibrium (nt, wage_level)

    % Labor supply: y = x + 1 (slope 1, intercept 1)
    % Passes through E=(3,4). Start x=0.5 -> y=1.5
    \coordinate (S_start) at (0.5, {0.5+1});      % (0.5, 1.5)
    \coordinate (S_end_draw) at (7.5, {7.5+1});   % (7.5, 8.5), for drawing line past l_t
    \coordinate (lt_on_S) at (7, {7+1});          % (7,8), point on Supply curve at l_t

    % Axes
    % X-axis (max X is 8.5)
    \draw[->, >=Latex] (O) -- (8.5,0) node[below=0.5cm, align*=center] at (4.25,0) {employment \\ labor force};
    % Y-axis (max Y is now 9.5 for a squarer plot)
    \draw[->, >=Latex] (O) -- (0,9.5) node[midway, rotate=90, anchor=south, yshift=4mm] {wage}; % 'yshift' moves along normal (left)

    % Labor Demand (vertical line, brown)
    % Drawn from x-axis up to a reasonable height (e.g., 8.0)
    \draw[brown, very thick] (3,0) -- (3, 8.0);
    \node[black, left=2mm] at (3, 7.0) {labor demand}; % Positioned left of the line, near top

    % Labor Supply (upward sloping, blue)
    \draw[blue, very thick] (S_start) -- (S_end_draw);
    % Label positioned above the line, around x=5.2
    \node[black] at (5.2, {5.2+1+0.7}) {labor supply}; % (5.2, y_line=6.2, label_y=6.9)

    % Dashed lines
    \draw[dashed] (E) -- (wage_level_on_y); % Horizontal from E to y-axis
    \draw[dashed] (lt_on_S) -- (lt_x_val);  % Vertical from S curve at l_t to x-axis
    \draw[dashed] (E) -- (lt_x_val |- E);    % Horizontal from E to (l_t, wage_level) for u_t brace

    % Points and Labels on axes
    \node[below] at (nt_x_val) {$n_t$};
    \node[below] at (lt_x_val) {$l_t$};
    \node[left] at (wage_level_on_y) {$w_t - p_t$};

    % Braces and their labels
    % u_t brace: between n_t and l_t at wage_level
    \path [decorate, decoration={brace,amplitude=5pt,mirror,raise=3pt}] % mirror makes brace open downwards
        (E) -- (lt_x_val |- E) node [black,midway,above=4pt] {$u_t$};

    % mu_t^w brace: on the demand curve, from S_start's y-level up to wage_level
    \coordinate (mu_brace_low_point_on_demand) at (3, {0.5+1}); % (3, 1.5) y-coord of S_start for this line
    \draw [decorate, decoration={brace,amplitude=5pt,raise=3pt}] % raise lifts brace off the line path
        (mu_brace_low_point_on_demand) -- (E) node [black,midway,right=4pt] {$\mu_t^w$};

    % Add dot for equilibrium for clarity
    \fill (E) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

In this framework, define the natural rate of unemployment as the unemployment observed in equilibrium if wages were flexible: $\mu^w = \phi u^n$. Therefore:

$$
\mu_{t}^w - \mu^w
 = \phi(u_{t}- u ^n)
 $$
This allows to rewrite the NKWPC in terms of unemployment:

$$
\pi_{t}^w = \beta \mathbb{E}_{t} [\pi_{t+1}^w] - \lambda_{w} \phi (u_{t} - u^n)
$$

This connects to the [[Advanced Political Economy#The Classical Curve|original Phillips Curve]] proposed by Phillips, which related wage inflation and unemployment. The stickier the wages, the smaller $\lambda_{w}$, and inflation responds less to unemployment.

#### Dynamic Response of Labor Market Variables to a Monetary Policy Shocks

The new equations allow to see how labor market variables react to a tightening of monetary policy (policy realization of $v_t$).

![[Labor market and monetary shock.png|center|300]]

The unemployment rate decreasesm together with the real wage, with a slight increase in the labor force. Unemployment rate decreases more than employment, as the labor force is slightly increasing, due to the wealth effect of labor supply: consumption decreases, the marginal utility of consumption is higher, and a stronger incentive to work kicks in. If this were the only shock, it would imply countercyclical labor force: however, the data suggest that labor force is quite stable, and if it exhibits any cyclicality it would be procyclical. This issue is grappled with by Galì, Smets & Wauters, based on the Smets & Wauters model — a medium scale NK model, extended so as to incorporate investment, indexation, and other variables. In Galì, Smets and Wauters, unemployment is introduced and the model is taken to the data. In particular, it implements the ideas paper by Jaimovich and Rebelo, which modifies preferences to dampen labor supply shocks in the short run, into the Smauts and Wauters model. The labor supply equation would look thereby as:

$$
p_{t} = \mu^w + x_{t} + \phi l_{t} + \xi_{t}
$$

where $x_{t} \equiv \gamma x_{t-1} + (1-\gamma)c_{t}$. If $\gamma$ is large, $x_{t}$ would not change much, so that the wealth effect would not be completely eliminated but dampened. In the long run, however, $l_t$ would adjust, and $x_t$ and $c_t$ would identify. This would be consistent with balanced growth ($\sigma=1$) on the long run.

## Conclusion: The New Keynesian Perspective on Economic Fluctuations

How to think to the NK model in a graphical way? Imagine a diagram with employment and wage, and assume that the real wage adjusts to the employment level (the Neoclassical Perspective). Empirical evidence will likely be at odds with such an economy. Suppose now to allow with "wedges": the price and wage markups. It is possible to define the gap between marginal rate of substitution and marginal product of labor:

$$
\begin{align*}
\text{gap}_{t} &\equiv mrs_{t} - mpn_{t} \\
&= -(\mu_{t}^p + \mu _{t}^w) \leq 0
\end{align*}
$$

which is the **Efficiency Gap**: 0 is perfect competition, and the lower the gap, the greater the distortion (positive values would be possible only with firms selling below the production cost or workers working below their marginal disutility). In the Neoclassical Benchmark, then, it is possible to be everywhere in the area below the two schedules, and the gap is uniquely identified by the wage and price markups. A model is, however, needed to track the exact location of the real wage and the markups in that area. The NK model is *one* such model (for example, models with endogenous markups also exist). In this model, monopolistic competition in goods and labor markets induces positive desired markups, but sticky prices and wages allow for markups to fluctuate around their desired value ("elastic markups"). In fact, the desired markups allow to draw additional schedules. If we simply had a natural equilibrium (markups, but flexible prices), these new two schedules would *determine* the level of employment, namely below the centralized solution manner, and thus pin down output (natural equilibrium). Monetary policy would thus be neutral.
With stickiness, however, markups can *move around* the intersection of such new schedules, so far as the non-negative markup regions is not violated. Whether the current real wage is above or below such intersection depends on the markup gaps, and in particular which one is positive and which one is negative. Monetary policy is no longer neutral. The greatest difference from the neoclassical perspective is that aggregate demand now finds its way in affecting the economy. A shock has some impact on aggregate demand, if the interest rate remains unchanged. However, an active monetary policy rule can affect the real interest rate, and work with aggregate demand to dampen or sustain a shock. In equilibrium, this is possible precisely thanks to elastic markups.
Suppose only sticky prices where there: the wage markup would be constant and thus we would move only along the $mrs_ + \mu^w$ schedule (and viceversa, along the $mpn - \mu^p$ is only sticky wages were there).

[^2]: This is the only explanation I could come up with for the disappearance of the term $1+z_{t}$, provided that the math is correct. This derivation may be subject to revision later on.

[^3]: Namely, this is the "variational" solution method proposed during the lecture.
