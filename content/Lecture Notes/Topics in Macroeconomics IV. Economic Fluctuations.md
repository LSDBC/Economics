
> [!abstract] Preface by **Lorenzo Bianchi Chignoli**
> These lecture notes were originally prepared for the *Topics in Macroeconomics IV. Economic Fluctuations* course offered by Jordi Galí in the MRes in Economics program at Universitat Pompeu Fabra during the Winter 2026 term. The content is primarily derived from my personal notes from Jordi Galí's lectures, complemented by key excerpts from his textbook *Monetary Policy, Inflation, and the Business Cycle* (Galí, 2015, 2nd ed.). Many of the mathematical derivations were worked out as exercises and, therefore, may contain inaccuracies.

## Monetary Policy in the Open Economy

In the beginning of the course, we will extend the New Keynesian (NK) model to the open economy. Why is the NK extension to the open economy so important? Mainly because many policy relevant questions involve open markets:

- *What inflation measure should the central bank (CB) stabilize?* In an open economy, there are multiple measures of inflation: domestic inflation or CPI, which includes imported goods. Normally, CPI is the relevant measure for economic fluctuations.
- *Should the CB care about the exchange rate?*
- *Is cooperation among CBs desirable?* In open economies, outcomes are affected by multiple policymakers. Chances are that cooperation leads to welfare gains.
- *How should monetary policy be conducted in a currency union?* That is, without collapsing it to the closed economy scenario? Different members may be subject to idiosyncratic shocks, making the answer not trivial..

Modeling open economies requires several decisions about the assumptions that characterize the models. These include several properties listed below. 
To begin with, the *size* of the economy (relative to the resto of the world, RoW), since the RoW matters for feedback effects between domestic and foreign quantities. Naturally, small open economies are easier to treat as they assume no feedback effects. The small open economy assumption fails in two-countries models.
In a closed economy, we assumed a representative consumer. In that case, the completeness of financial markets and the nature of the available assets was irrelevant: in equilibrium, no trade in assets occurs. Things are different in open economies: at the very least, there are consumers belonging to different economies - a source of heterogeneity -, that can trade in assets. Then, the specific assets that can be traded will matter for equilibrium allocations.
In the context of monetary models, the currency in which prices are set matters and has important implications. It is also not obvious what is the right decision on the matter of pricing. A firm producing a goods in our economy might decide to set the price of the exported good in terms of the domestic, foreign, or a third-party currency. These cases have different implications and are relevant in different contexts to model different phenomena.
Last, models of open economies can be interpreted as a particular case of heterogeneous agent models, where heterogeneity arises by the country of belonging. Idiosyncratic shocks and country-specific constraints incorporate such heterogeneity.

The following framework is derived from Chapter 8 of the textbook, which is itself a slightly simplified version of Galí and Monacelli (2005). Its assumptions are strong, but characterize an idealized monetary small open economy that serves as a benchmark for relaxing the assumptions. In particular, we assume an **infinitesimally small economy with complete markets and producer currency pricing (PCP)** (then, the RoW is treated as a closed economy).
A representative household maximizes:

$$
\mathbb{E}_{0} \sum_{t=0}^\infty \beta^t U(C_{t}, N_{t} ; Z_{t})
$$

where the consumption bundle has two layers, a CES function of two indices (domestic products $H$ and foreign $F$)

$$
C_{t} \equiv \left(  (1-v)^{ \frac{1}{\eta} } C_{H,t}^{ \frac{\eta - 1}{\eta} } + v C_{F,t}^{ \frac{\eta - 1}{\eta} } \right)^{ \frac{\eta}{\eta-1}}
$$

Note that $v$ determines the weight of foreign goods in the consumption bundle, while $\eta$ measures the elasticity of substitution between domestic and foreign goods, so that $1-v$ can be interpreted as a measure of the "home bias"[^1]. In equilibrium, this is the ratio of domestic goods against foreign goods.
The period budget constraint is:

$$
\int_{0}^1 P_{H,t}(i) C_{H,t}(i) \,di + P_{F,t} C_{F,t} + \mathbb{E}_{t} [ Q_{t,t+1}, D_{t+1} ] \le W_{t} N_{t} + D_{t}
$$

where, since we assumed complete markets, we define $D_{t+1}$ as the random payoff next period, while $Q_{t,t+1}$ is the stochastic discount factor (SDF).

> [!focus]- Complete Markets, Time-$t$ Trade
> This callout summarizes ideas developed more deeply in [[Advanced Macroeconomics III (Jeenas)#Complete Markets|AMIII (Priit Jeenas)]]. The market value at time $t$ of random payoff  $D_{_{T+1}}$ is:
> 
> $$
> \begin{align*}
> \sum_{\omega^{t+1} \mid \omega^t } V ( \omega^t ; \omega^{t+1} ) D (\omega^{t+1}) &= \sum_{\omega^{t+1} \mid \omega^t } \xi (\omega^{t+1} \mid  \omega^t ) \frac{V (\omega^t) ; \omega^{t+1} }{ \xi (\omega^{t+1} ; \omega^t ) } D( \omega^{t+1})
> \\
> &= \mathbb{E}_{t} [Q_{t,t+1} D_{t+1}]
> \end{align*}
> $$
> 
> where $\xi$ is a probability measure.


For simplicity, we assume the same CRRA utility function as in the closed economy:

$$
U(C_{t},N_{t};Z_{t}) =
\begin{cases}
\left( \frac{C_{t}^{1-\sigma}-1}{1-\sigma} - \frac{N_{t}^{1+\phi}}{1+\phi}  \right) Z_{t} & \sigma\neq{1} \\
\left( \log(C_{t}) - \frac{N_{t}^{1+\phi}}{1+\phi} \right) Z_{t} & \sigma={1}
\end{cases}
$$

The optimal allocation of expenditure follows as usual, although it now involves two nested levels: the optimal bundle of domestic goods $i$, and the optimal composition of domestic to foreign bundles.
For domestic goods, it holds that:

$$
C_{H,t} (i) = \left(  \frac{P_{H,t}(i)}{P_{H,t}}  \right)^{- \varepsilon} C_{H,t}
$$

for the price level index defined as usual as $P_{H,t} \equiv \left( \int_{0}^1 P_{H,t}(i)^{1-\varepsilon} \,di \right)^{\frac{1}{1-\varepsilon}}$, and now referred to as the **domestic price index (DPI)**. As usual, this implies that $\int_{0}^{1} P_{H,t}(i) C_{H,t}(i) \,di = P_{H,t} C_{H,t}$.
As for the domestic against foreign level, this is solved taking the minimization problem:

$$
\min_{ C_{H,t}, C_{F,t} } P_{H,t} C_{H,t} + P_{F,t} C_{F,t} \quad \text{ subject to } \quad
[ (1-v) ^{\frac{1}{\eta}} C_{H,t}^{\frac{\eta-1}{\eta}} + v^{\frac{1}{\eta}} C_{F,t}^{\frac{1 - \eta}{\eta}} ] ^{\frac{1}{\eta - 1}} = C_{t}
$$

Then:

$$
\begin{align*}
C_{H,t} &= (1-v) \left(  \frac{P_{H,t}}{P_{t}}  \right)^{-\eta}
&
C_{F,t} &= v \left(   \frac{P_{F,t}}{P_{t}} \right)^{-\eta}
\end{align*}
$$

where $P_{t} \equiv [ (1-v) P_{H,t}^{1-\eta} + v P_{F,t}^{1 - \eta} ]^{\frac{1}{1-\eta}}$ is referred to as the **consumer price index (CPI)**. As before, this can be rewritten as:

$$
P_{t} C_{t} = P_{H,t} C_{H,t} + P_{F,t} C_{F,t}
$$

The rest of the optimality conditions do not involve foreign variables, and follow similarly as the closed economy case. First, consider the intratemporal optimality condition or optimal labor supply:

$$
\frac{W_{t}}{P_{t}} = C_{t}^\sigma N_{t}^\phi
$$

Then, note the shape of Arrow security optimality condition. Although implicit in the closed economy, we can write it fully:

$$
\frac{ U_{c}(\omega^t) }{P(\omega^t)} V(\omega^t ; \omega^{t+1})  = \xi(\omega^{t+1} \mid  \omega^t ) \frac{\beta U_{c} (\omega^{t+1})}{P(\omega^{t+1})}
$$

Put simply, it imposes that today's welfare loss associated with the purchase of a specific Arrow security must be equal to the expected gain in utility in the foreign period associated with such security. Exploiting the definition of the SDF, this condition *implies* the good old condition:

$$
Q_{t,t+1} = \beta \left(  \frac{C_{t+1}}{C_{t}}  \right)^{-\sigma} \left(  \frac{Z_{t+1}}{Z_{t} } \right) \left( \frac{P_{t}}{P_{t+1}} \right)
$$

In this formulation, it is clear that we can isolate the one-period nominally riskless bond. This synthetic asset is crucial, as we will treat the interest rate as the inverse of its price (by definition).

$$
\begin{align*}
Q_{t} &\equiv e^{-i_{t}} 
\\
&= \mathbb{E}_{t} [Q_{t,t+1}]
\\
&= \beta \mathbb{E}_{t} \left [ \left(  \frac{C_{t+1}}{C_{t}}  \right)^{-\sigma} \left(  \frac{Z_{t+1}}{Z_{t} } \right) \left( \frac{P_{t}}{P_{t+1}} \right) \right ]
\end{align*}
$$

which can be loglinearized into the consumption analogue of the IS equation:

$$
c_{t} = \mathbb{E}_{t}[c_{t+1}] - \frac{1}{\sigma} ( i_{t} - \mathbb{E}_{t}[\pi_{t+1}] - \rho ) + \frac{1}{\sigma} ( 1 - \rho_{z})z_{t}
$$


> [!exercise|*]+ Uncovered Interest Parity Condition
> To begin with, state the pricing equation for foreign short-term bond as implied by the uncovered interest parity condition (UIP): $Q_{t}^* \equiv e^{-i_{t}} = \mathbb{E}_{t} \left[  Q_{t,t+1} \left(  \frac{\mathcal{E}_{t+1}}{\mathcal{E_{t}}}  \right) \right]$. 
> 
> This can be seen as follows. The price of a foreign bond from a domestic perspective is $\mathcal{E}_{t} Q_{t}^*$ where the former is the nominal exchange rate (conventionally defined as the ration of foreign to domestic currency), while the latter is the price of the foreign short term riskless bond. It must be the case that $\mathcal{E}_{t} Q_{t}^* = \mathbb{E}_{t} [ Q_{t,t+1} \mathcal{E}_{t+1} ]$, which can be rearranged in the previous expression. Rewrite this as:
> 
> $$
> \begin{align*}
> 1 &= \mathbb{E}_{t} [ e^{i_{t}} Q_{t,t+1} ]
> &
> 1 &= \mathbb{E}_{t} [ e^{i^*_{t}} \frac{\mathcal{E}_{t+1}}{\mathcal{E}_{t}} Q_{t,t+1} ]
> \end{align*}
> $$
> 
>Subtracting one from the other, and writing the RHS as the exponential function of the logs, it is possible to take the log and then approximate to a first order expansion, so as to respectively obtain:
> 
> $$
> \begin{align*}
> 0 &= \mathbb{E}_{t} [ Q_{t,t+1} ( e^{i_{t}} - e^{i^*_{t} + \Delta \epsilon_{t+1} } ) ]
> \\
> i_{t} & \approx i_{t}^* + \mathbb{E}_{t} [ \Delta \epsilon_{t+1} ]
> \end{align*}
> $$
> 
> Obviously, the second is a linear approximation: it kills the "risk premium" that is naturally incorporated in the UIP condition in the form of the "spread".


To continue, define the **terms of trade** as: $\mathcal{S}_{t} \equiv \frac{P_{F,t}}{P_{H,t}}$. In logs: 

$$
s_{t} = p_{F,t} - p_{H,t}
$$

^3e7256

The CPI and domestic price indices are defined as before. The terms of trade involve nominal variable; as in the closed economy case of the domestic price level, it is not possible to Taylor-expand around some "steady state", as this concept is not well-defined for nominal variables. Then, we rather divide both sides by $P_t$:

$$
1 = (1-v) \left( \frac{P_{H,t}}{P_{t}} \right)^{1-\eta} + v \left(  \frac{P_{F;t}}{P_{t}} \right)^{1-\eta}
$$

The domestic and foreign prices relative to the CPI, instead, do have a well defined steady state (in particular, in equilibrium, each of them equals one). Rewrite the previous condition in logs:

$$
\begin{align*}
1 &= (1-v) \left( \frac{P_{H,t}}{P_{t}} \right)^{1-\eta} + v \left(  \frac{P_{F;t}}{P_{t}} \right)^{1-\eta}
\\
1 &= (1-v) e^{ (1-\eta)(p_{H,t} - p_{t}) } + v e^{ (1-\eta)(p_{F,t} - p_{t}) }
\\
1 & \simeq (1 - v) ( 1 + (1 - \eta) ( p_{H,t} - p_{t} ) ) + v ( 1 + (1 - \eta) (p_{F,t} - p_{t} ) )
\\
1 & \simeq 1 + (1 - v)  (1 - \eta) ( p_{H,t} - p_{t} ) ) + v (1 - \eta) (p_{F,t} - p_{t} ) )
\\
0 & \simeq  (1 - v)  (1 - \eta) p_{H,t} + v (1 - \eta) p_{F,t} - (1 - v + v)  (1 - \eta) p_{t}
\\
0 & \simeq  (1 - v) p_{H,t} + v p_{F,t} - p_{t}
\end{align*}
$$

This implies the following results:

$$
\begin{align*}
p_{t} & \simeq (1-v) p_{H,t} + v p_{F,t}
\\
&= p_{H,t} + v s_{t}
\\
\pi_{t} & \simeq \pi_{H,t} + v \Delta s_{t}
\end{align*}
$$

a result that holds exactly rather than approximately for $\eta=1$ since $P_{t} \equiv P_{H,t}^{1-v} P_{F,t}^{v}$.

Another heroic assumption we impose is that the **law of one price (full pass through)** holds[^2]. That it:

$$
\begin{align*}
P_{F,t} &= \mathcal{E}_{t} P_{F,t}^* = \mathcal{E}_{t} P_{t}^*
\\
P_{H,t}^* &= \frac{P_{H,t}}{\mathcal{E}_{t}}
\\ \\
p_{F,t} &= e_{t} + p_{t}^*
\\
p^*_{H,t} &= p_{H,t} - e_{t}
\end{align*}
$$

Note that we are treating the rest of the world as a closed economy, since $P_{F,t}^* = P_{t}^*$ is assumed in line 1.

Define the real exchange rate:

$$
\begin{align*}
\mathcal{Q}_{t} & \equiv \frac{\mathcal{E}_{t} P_{t}^* }{P_{t}} = \frac{P_{F,t}}{P_{t}}
\\
q_{t} &\equiv p_{F,t} - p_{t}
\\
&\simeq p_{F,t} - ( p_{H,t} + v s_{t} )
\\
&= (1-v) s_{t}
\end{align*}
$$

also holding exactly for $\eta=1$ and hence $\mathcal{Q} = S_{t}^{1-v}$.

A very important implication of complete markets is the **international risk sharing condition**. Foreign consumers *also* have access to complete markets, and thus face the following optimality condition:

$$
\begin{align*}
\frac{ V (\omega^t ; \omega^{t+1}) }{ P^* ( \omega^t) \mathcal{E}(\omega^t)} U_{c}^* (\omega^t) &= \xi (\omega^{t+1} \mid \omega^t) \frac{ \beta U_{c}^* ( \omega^{t+1}) }{ P_{\omega^{t+1}}^* \mathcal{E}(\omega^{t+1}) }
\\
\implies \frac{U^*_{c,t}}{\mathcal{Q_{t} } U_{c,t}} &= \frac{U^*_{c,t+1}}{\mathcal{Q_{t+1}}  U_{c,t+1}}
\end{align*}
$$

where the second line is obtained dividing the asset optimality conditions for home and foreign. That constant ratio can be referred to as $\frac{U^*_{c,t}}{\mathcal{Q_{t} } U_{c,t}} = \vartheta$. This allows some smart rewriting:

$$
\begin{align*}
C_{t} &= \vartheta C_{t}^* Z_{t}^{\frac{1}{\sigma}} \mathcal{Q}_{t}^{\frac{1}{\sigma}}
\\
c_{t} &= y_{t}^* + \frac{1}{\sigma} (z_{t} + q_{t} )
\\
& \simeq y_{t}^* + \frac{1}{\sigma} z_{t} + \left(  \frac{1 - v }{\sigma}  \right) s_{t}
\end{align*}
$$

which implies in equilibrium a perfect co-movement between domestic consumption and foreign output (hence the name). Note that this condition is normally rejected empirically (Backus-Smith puzzle).

To continue, define an export function that will be part of the aggregate demand for domestic goods. Anything can be assumed in this case, thanks to the assumption that home is infinitesimally small. By analogy with the demand function, impose that:

$$
X_{t}(i) = \left(  \frac{P_{H,t}(i)}{P_{H,t}} \right)^{-\varepsilon} X_{t}
$$

where $X_{t} \equiv \left( \int_{0}^1 X_{t}(i) ^{\frac{\varepsilon-1}{\varepsilon}} \,di \right)^{\frac{\varepsilon}{\varepsilon-1}}$ is given by:

$$
\begin{align*}
X_{t} &= v \left(  \frac{P_{H,t}}{\mathcal{E_{t}}P_{t}^* }  \right) ^{-\eta} Y_{t}^*
\\
&= v \mathcal{S}_{t}^{\eta} Y_{t}^*
\end{align*}
$$

With a symmetric steady state, balanced trade follows: $C_{F} = X_{t}$. This setup is consistent with a global GE with a continuum of countries (for reference, read [Galí and Monacelli's response to Hellwig](https://crei.cat/wp-content/uploads/2017/05/gm_note_hellwig.pdf)).

Optimal price setting remains the same as usual, as it does not involve any open economy term. This holds, of course, only given that the firms sets a unique price by the full pass through assumption. For details about this derivation, refer to [[Advanced Macroeconomics III (Galí)#The Basic New Keynesian Model|the previous LNs]].

The domestic inflation dynamics follow as:

$$
\pi_{H,t} = \beta \mathbb{E}_{t} [ \pi_{H,t+1} ] - \lambda ( \mu_{t} - \mu)
$$

Note that his involves domestic inflation, and will not hold for CPI. The key message is that *the markup based version of the NKPC for domestic inflation is invariant to openness*.

To solve for the equilibrium, impose market clearing on the final goods markets:

$$
\begin{align*}
Y_{t}(i) &= C_{H,t}(i) + X_{t}(i)
\\
&= \left( \frac{P_{H,t}(i)}{P_{H,t}} \right)^{-\varepsilon} C_{H,t} + \left( \frac{P_{H,t}(i)}{P_{H,t}} \right)^{-\varepsilon} X_{t}
\\
&= \left( \frac{P_{H,t}(i)}{P_{H,t}} \right)^{-\varepsilon} \left[ (1-v) \left( \frac{P_{H,t}(i)}{P_{t}} \right)^{-\varepsilon} C_{t } + v S_{t}^\eta Y_{t}^* \right]
\\
&= \left( \frac{P_{H,t}(i)}{P_{H,t}} \right)^{-\varepsilon} \left[ (1-v) [ (1 - v) + v \mathcal{S}_{t}^{1 - \eta} ]^{ \frac{\eta}{\eta-1}} C_{t } + v S_{t}^\eta Y_{t}^* \right]
\end{align*}
$$

Combined with the definition of output as $Y_{t} \equiv \left(  \int_{0}^{1} Y_{t}(i) ^{\frac{\varepsilon - 1}{\varepsilon}} \,di  \right) ^ {\frac{\varepsilon - 1}\varepsilon}$:

$$
Y_{t} = (1-v) \left[ (1-v)  + v \mathcal{S}_{t}^{1 - \eta} \right]^{ \frac{\eta}{\eta-1}} C_{t } + v S_{t}^\eta Y_{t}^* 
$$

In the steady state, $C = Y = Y^{*}$ and $\mathcal{S}=1$.
Log-linearizing around a symmetric steady state, we get that:

$$
\hat{y}_{t} \simeq (1 - v) \hat{c}_{t} + v ( 2 - v ) \eta s_{t} + v \hat{y}_{t}^{*} 
$$

with the particular exact result, for $\eta=1$:

$$
Y_{t} = (1-v) \mathcal{S}_{t}^{v} C_{t} + v \mathcal{S}_{t} Y_{t}^{*}
$$


> [!focus] UIP and the Terms of Trade
> Under the assumption of complete international financial markets, the UIP can be log-linearized about a perfect foresight steady state, leading to the familiar UIP reported before. Furthermore, however, we can combine [[#^3e7256]] and the UIP condition to obtain:
> 
> $$
> \begin{align*}
> e_{t} &= \mathbb{E}_{t} [ e_{t+1} ] + i^*_{t} - i_{t}
> \\
> \underbrace{ e_{t} + p^*_{t} - p_{H,t} }_{s_{t}} &= \mathbb{E}_{t} [ e_{t+1} + p_{t+1}^* - p_{H,t+1} ] + r_{t}^* - r_{t}
> \\
> s_{t} &= \mathbb{E}_{t} [s_{t+1} ] + r_{t}^* - r_{t}
> \\
> s_{t} &= \sum_{k=0}^\infty \mathbb{E}_{t} [ r_{t+k}^* - r_{t+k} ]
> \end{align*}
> $$
>
> or equivalently:
>
>$$
>s_{t} = \sum_{k=0}^\infty \mathbb{E}_{t} [ ( i_{t+k}^* - \pi^{*}_{t+k+1} ) - ( i_{t+k} - \pi_{t+k+1}  ) ]
>$$
> 
> That is, the terms of trade are a function of current and anticipated real interest rate differentials.

Labor market clearing works as in the closed economy scenario:

$$
\begin{align*}
N_{t} &\equiv \int_{0}^{1} N_{t}(i) \,di
\\
&= \left( \frac{Y_{t}}{A_{t}} \right)^{\frac{1}{1-\alpha}} \int_{0}^{1} \left(  \frac{P_{H,t}(i)}{P_{H,t}}  \right)^{-\frac{\varepsilon}{1-\alpha}} \,di
\end{align*}
$$

approximated as:

$$
(1 - \alpha) n_{t} = y_{t} - a_{t}
$$

The price markup expressed in terms of the output gap is also similar to the basic model, with the addition of the terms of trade:

$$
\mu_{t} \simeq -\sigma c_{t} - \left( \frac{\phi + \alpha}{1 - \alpha} \right) y_{t} - v s_{t} + \left( 1 + \frac{\phi + \alpha}{1 - \alpha} \right) a_{t} + \log(1-\alpha)
$$

The equilibrium of the non-policy block can be summarized as follows:

$$
\begin{align*}
\hat{y}_{t} & \simeq (1 - v) \hat{c}_{t} + v (2 - v) \eta s_{t} + v \hat{y}_{t}^{*}
\\
\hat{c}_{t} &= \mathbb{E}_{t} [ \hat{c}_{t+1} ] - \frac{1}{\sigma} ( \hat{i}_{t} - \mathbb{E}_{t}[\pi_{t+1}] ) + \frac{1}{\sigma} (1 - \rho_{z}) z_{t}
\\
\hat{c}_{t} & \simeq \left( \frac{1 - v}{\sigma} \right) s_{t} + \hat{y}_{t}^{*} + \frac{1}{\sigma} z_{t}
\\
\pi_{H,t} &= \beta \mathbb{E}_{t} [\pi_{H,t+1}] - \lambda \hat{\mu}_{t}
\\
\hat{\mu} &= -\sigma c_{t} - \left( \frac{\phi + \alpha}{1 - \alpha} \right) y_{t} - v s_{t} + \left( 1 + \frac{\phi + \alpha}{1 - \alpha} \right) a_{t} + \log(1-\alpha)
\\
\pi_{t} &= \pi_{H,t+1} + v \Delta s_{t}
\\
s_{t} &= s_{t-1} + \Delta e_{t} + \pi_{t}^{*} - p_{H,t}
\end{align*}
$$

for some arbitrary non-policy block. An example might be:

$$
i_{t} = \rho + \phi_{\pi} \pi_{H,t} + \phi_{y} \hat{y}_{t} + v_{t}
$$

![[IRF_Monetary_shock.png|center]]


---

[^1]: Since we're infinitesimally small, without home bias no one would buy domestic goods. Weight to such goods needs to be imposed *ad hoc*.

[^2]: This is often contradicted in practice, by local currency pricing or customer market pricing, even with PCP.
