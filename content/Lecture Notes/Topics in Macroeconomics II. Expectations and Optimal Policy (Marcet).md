
> [!abstract] Preface by **Lorenzo Bianchi Chignoli**
> These lecture notes were originally prepared for the *Topics in Macroeconomics II. Expectation and Optimal Policy* course offered by Albert Marcet in the MRes in Economics program at Universitat Pompeu Fabra during the Spring 2025 term. The content is primarily derived from my personal notes. Many of the mathematical derivations were worked out as exercises and, therefore, may contain inaccuracies.


This course explores modelling approaches to expectations, and the corresponding optimal policies in dynamic economies.

## Expectations

### History of Rational Expectations

Older approaches simply specified expectations as a fixed function of current and past variables. Assuming inconsistent expectations to the model's implication is the most disappointing feature of non-rational expectations. The crisis of Classical Keynesian models occurred in the 70s with the failure of the classical Phillips Curve to predict a positive correlation between inflation and unemployment. With rational expectations (hereafter, RE), instead, agent's predictions coincide with objective predictions, as the model's natural predictive output. As aid, this also implies that expectations are enforced by the model itself: there is no additional degrees of freedom to test the model predictions against specifications of expectations. Sure enough, the Classical Keynesian models had an excessive, basically infinite amount of degrees of freedom, with maximized explanatory power and minimized predictive power. At that time, RE was a welcome methodological innovation, as it avoided arbitrary model specifications.

Agents in the Old Keynesian models were assumed to form expectations following equations that differed from the model's equation determining the very outcome expected upon. Put simply, Old Keynesian agents make *the same mistake all the time*. In contrast, real-world agents *do* make mistakes, but not the same mistakes at every time, and do not incur systematic welfare losses due to misspecified expectations. A learning mechanism was lacking for people to adjust their expectational equations.

RE, instead, avoided that "stupid" mistakes was repeatedly committed, and became the dominant paradigm in modelling expectations in economics around the 80s. This is thanks to some theoretical features of RE:
- The choice of expectations is dictated by the model, and no arbitrary modelling is admitted.
- It a stable expectation that is maintained in the long run
- It prevents agents to make systematic, or even "stupid", mistakes in their forecasts.
Although these are good methodological justification, and any deviation from RE should address them, it seems like an unreasonable burden that agents come to know rational expectations straight away. Moreover, alternative way to solve such problems may exist.

### An Application: Expectations and Asset Prices

An excellent example for modeling expectation is the stock market. Stock prices are quite unpredictable, and especially in the long run where booms and busts dominate. The stock market may exhibit high prices either due to good fundamentals, and the corresponding well-grounded expectations of profitability; or mistaken expectations, which may lead to a bubble burst. The conflict between expectations and outcomes is well exemplified by the famed excess return regressions. Fama's efficient market's hypothesis should prevent to predict stock prices (read, find a large value for a coefficient in the regression).

> [!quote] The **Efficient Market Hypothesis**
> The primary role of the capital market is allocation of ownership of the economy's capital stock. In general terms, the ideal is a market in which prices provide accurate signals for resource allocation: that is, a market in which firms can make production-investment decisions, and investors can choose among securities that represent ownership of firms' activities under the assumption that security prices at any time 'fully reflect' all available information. A market in which prices always 'fully reflect' available information is called 'efficient'. (Fama, 1970, p. 383)

Instead, excess return regressions show this is not quite the case. Consider Table 1 in Adam, Marcet, Nicolini:

| Quantity					      | Coefficient					        | Other measure					|
| --------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------- |
| Volatility of PD ratio                              | $\hat{\mathbb{E}}_{\mathrm{PD}} = 123.91$               | $\hat{\sigma}_{\mathrm{PD}} = 62.43$          |
| Persistence of PD ratio                             | $\hat{\rho}_{\mathrm{PD}_{t}, \mathrm{PD}_{t-1}} = .97$ |                                               |
| Excessive return volatility                         | $\hat{\rho}_{\text{R}_{t}^{\mathrm{stock}}} = 11.44$    | $\hat{\sigma}_{\frac{D_{t}}{D_{t-1}}} = 2.88$ |
| Excess long run return predictability ($n=5$ years) | $\hat{b}^{\mathrm{PD}} = -.0041$                        | $R^2 = .2102$                                 |
| Equity premium                                      | $\hat{E}_{R_{t}^{\mathrm{stock}}} = 2.25$               | $\hat{E}_{R_{t}^{\mathrm{bond}}} = .15$       |

where $D_t$ denotes dividends, $P_t$ stock prices, $PD_t$ is the price-dividend ratio, and $R$ are the returns for stocks and bonds. This shows that stock prices are highly volatile: not only the standard deviation of the price-to-dividend ratio is extremely high relative to its mean, but also the standard deviation in stock returns are much larger than the standard deviation in dividends. Moreover, fluctuations in PD are persistent. 

This leads to the famed **long run return predictability**, incorporated in the excess return regressions ([[The Cross-Section of Expected Stock Returns|Fama and French, 1992]]). Define the total future $n$-period excess returns as

$$
X_{t,n} = \sum_{i=1}^n [ \log(1 + R_{\mathrm{stock},t+i}) - \log (1 + R_{\mathrm{bond}, t+i}) ]
$$

and run the following regressions:

$$
\begin{align*}
X_{t,n} &= a_{n} + b_{n} \frac{D_{t}}{P_{t}} + u_{t,n}
\\
\frac{D_{t+n}}{D_{t}} &= c_{n} + d_{n} \frac{D_{t}}{P_{t}} + v_{t,n}
\end{align*}
$$

Empirical results for this regression are provided by Cochrane (2005) as follows:


|     | Predict $X_{t,n}$ |                       |       | Predict $\frac{D_{t+n}}{D_{t}}$ |                       |       |
| --- | ----------------- | --------------------- | ----- | ------------------------------- | --------------------- | ----- |
| $n$ | $\hat{b}_{n}$     | $\sigma(\hat{b}_{n})$ | $R^2$ | $\hat{d}_{n}$                   | $\sigma(\hat{d}_{n})$ | $R^2$ |
| 1   | 5.30              | 2.00                  | 0.15  | 2.00                            | 1.10                  | 0.06  |
| 2   | 10                | 3.10                  | 0.23  | 2.50                            | 2.1                   | 0.06  |
| 3   | 15                | 4.00                  | 0.37  | 2.4                             | 2.1                   | 0.06  |
| 5   | 33                | 5.80                  | 0.6   | 4.7                             | 2.4                   | 0.12  |

(Beware that this data has DP rather than PD on the RHS, and data is yearly rather than quarterly like in the previous table.)
Put simply, future excess returns are higher when $P$ is relatively low. Moreover, $\hat{b}$ is significantly different from 0, the more the longer the horizon $n$. Finally, the $R^2$ is relatively high and rejects the "weak form of market efficiency" in the long run. This result is very robust and is sometimes described as **mean reversion** of DP.
In contrast, $\hat{d}$ is not significant: therefore, mean reversion and volatility of returns are due to price movements, and not dividends.

Let us attempt to micro-found asset pricing with RE. In a famed model by Lucas', a representative consumer/investor chooses stock holdings $S_t$ and consumption $C_t$ to solve:

$$
\max_{\{ S_{t}, C_{t} \}} \mathbb{E}_{0} \sum_{t=0}^\infty u(C_{t}) \quad\text{ such that }\quad C_{t} + S_{t} P_{t} = W_{t} + S_{t-1}(P_{t} + D_{t})
$$

with exogenous $\{ W_{t}, D_{t} \}$. The stock market is competitive, with a total supply of 1. Feasibility is ensured at $C_{t} = W_{t} + D_{t}$ and the stock market equilibrium implies $S_{t}=1$- The FOC for the optimal $S$ is:

$$
u'(C_{t}) P_{t} = \beta \mathbb{E}_{t} [ u'(C_{t+1}) ( P_{t+1}  + D_{t+1} ) ]
$$

which can be plugged into the equilibrium conditions. By forward iteration and LIE (after assuming bounded prices):

$$
P_{t} = \mathbb{E}_{t} \sum_{j=1}^\infty \beta^j \frac{u'(C_{t+j})}{u'(C_{t})} D_{t+j}
$$

Given that consumption is fixed by the feasibility condition, in equilibrium this expectation is a function of past $W,D$'s only. Notice that in principle the $C_{t}$ that solves investors’ problem should be a function of past stock demand; however, stock holdings are not a state variable on equilibrium. More formally, for a history profile $(W,D)^t \equiv (W_{t}, D_{t}, W_{t-1}, D_{t-1}, \dots, W_{0}, D_{0} )$, it holds that prices should be predicted as a function of exogenous processes up to history time $t$, with no role of prices in predictions:

$$
P_{t} = F_{t}^P ( \{ W_{i}, D_{i} \}_{i=0}^t )
$$

for some non-stochastic pricing function $F_{t}^P$.

However, Cochrane's (2005) regressions show that it is virtually possible to "predict the future": high prices systematically accompany price drops (recall, the ratio is dividend-to-prices in Cochrane's regressions). Positive, but not significant, results are also obtained for dividends predictions. Thus, something is much strongly incorporated in prices that in cash flows -- that is, actual profitability. Something else might affect this difference, as the fundamental does not seem to suffice. Moreover, the model assumes that agents actually *know* the non-stochastic pricing function since their birth. The only uncertainty lies in the stochastic process for the exogenous variables. 

Assuming RE leads to serious puzzles once we get to the data. For instance, the **equity premium puzzle** (Mehra and Prescott, 1982), and especially Shiller's (1981) **excess volatility puzzle**. Both phenomena are unlikely to be explained through rational expectations. Intuitively, the reasons is that under RE it is in genera difficult to explain stock prices volatility in the equation

$$
P_{t} = \mathbb{E}_{t} \sum_{j=1}^\infty \beta^j \frac{U'(C_{t+j})}{U'(C_{t})} D_{t+j}
$$

In fact, averaging dividends (twice: the expectation is a probabilistic average, over a time series which also serves as an average) implies that volatility should drop dramatically. If this equation would hold, then, it would be unlikely that prices are more volatile than dividends.
For precision, consider the risk neutral case $U(C)=C$ to give a structural form to marginal utilities, with no labor income. Assume that dividends follow a pure unit root process such as $\frac{D_{t}}{D_{t-1}} = a \epsilon_{t}$ with iid error of mean 1. Then:

$$
P_{t} = \mathbb{E}_{t} \sum_{j=1}^\infty \beta^j D_{t+j}
$$

Substituting (and ignoring some variance terms in a loglinear approximation):

$$
P_{t} \approx \sum_{j=1}^\infty \beta^j \alpha^j D_{t} = \frac{\beta a}{1 - \beta a} D_{t}
$$

which implies that the $PD$ ratio is constant. Under RE, agents know this equation since birth!

In the following twenty years, many authors actually provided success stories in their attempt to generalize Lucas' asset pricing model, for instance with more general utility functions, production functions, incomplete markets, heterogeneous agents, and the like. For years, they failed repeatedly to give a quantitative explanation. Some exceptions include the following.

Campbell and Cochrane (1999) focus on habits, and defined the utility function:

$$
\begin{align*}
\mathbb{E}_{0} & \left[  \sum_{t=0}^\infty \beta^t u\left( \frac{C_{t}}{H_{t-1}} \right)  \right]
\\
\log H_{t} &= \rho H_{t-1} + \delta \left( \frac{C_{t}}{C_{t-1}} \right) \left(  \frac{C_{t}}{C_{t-1}} - \log H_{t-1} \right)
\end{align*}
$$

where the stochastic discount factor depends on $H_t$. Since this is highly volatile, this affects the risk aversion which becomes $\mathbb{E} \left[  -C_{t} \frac{u''\left( \frac{C_{t}}{H_{t-1}} \right)}{ u'\left( \frac{C_{t}}{H_{t-1}} \right) }  \right] \approx 80$. However, this utility function leads to weird results when plugged into standard DSGE models, such as increased utility for decreasing consumption (Ljungqvist and Uhling).

Bansal and Yaron (2004) assume output growth has a slow-moving component that affects dividends, such as $\log D_{t} - \log D_{t-1} = a_{t} + \epsilon_{t}$ such that $a_{t} = a_{t-1} + \eta_{t}$. Importantly, $a_{t}$ is perfectly observed by investors in period $t$. Since $a_{t}$ is the denominator and $1 - \beta a_{t} \approx 0$, small changes in $a_t$ lead to large changes in prices. This allows to explain the variance in the data.
However, some problems still persist. To match, the data, the variance of $\eta$ should be very small, because dividend growth does not show a strong unit root behavior in practice. If the variance of $\eta$ is much smaller than the variance of $\epsilon_t$, then this will assume a huge role as it piles up in the long run. The growth rate becomes time-varying and can exhibit large fluctuations; moreover, since the denominator is close to 1, small fluctuations in  lead to large fluctuations in the growth rate. Yet, it is weird to assume that agents in the model know about a variable, $a_t$, which does not even exist in statistical agencies.

Last, the rare disasters literature is also an example of success of RE. In this case, $\mathbb{E}_{t} [ u'(C_{t+1})]$: a small probability multiplies a very large number; then, taking the variance of consumption does not provide good insights on the variance of marginal utility, that could explode due to rare disasters. The main criticism, however, sounds as follows: if the truth is that these "small perceived probabilities" matter so much for asset pricing, then how can we ever know anything about stock price behavior? This is very close to a purely behavioral story where agents’ arbitrary changes in expectations can matter a lot.

Summing up, these attempt resembles the late-70s strategy. It is always possible to cook up models where a flawed assumption can explain some phenomena *ex post*, despite being basically useless for *ex ante* prediction. Moreover, survey data suggest that even professional forecasters are not following RE that explain the evolution of quantities such as the PD ratio (Adam, Marcet and Beutel, AER 2017).

RE is not the only way to attain the objectives desired by Sargent, Prescott, Lucas, and so on. With the additional contribution of the GFC, non-RE are being liberalized in these years, although this still faces a strong resistance. In fact, a mainstream argument is that departures from RE should be temporary -- any learning feature should converge rapidly to RE. This is usually referred to as the **Friedman hypothesis**.

> [!conjecture] Friedman Hypothesis
> Investors that hold wrong beliefs will be driven out of the market very quickly.

However, recent evidence suggests that not only learning, but also expulsion from the market takes a lot of time. Moreover, overly optimistic "crazy" agents may be overly parsimonious, and their savings may still ferry them to the future market (despite present welfare losses).
#### A formal test of RE through surveys

![[F01_Media_stock_return_survey.png|center]]

This graphs shows the median stock returns *over investors* that answers the survey, and should represent the "consensus belief". Investors were most optimistic about stock returns at the top of the dot.com bubble  (December, 1999). However, excess return regressions would have suggested that future returns were on average low at the top of the bubble (that is, high PD). Put simply, the green line in the graph seems incompatible with both RE among investors and data-driven prediction of the excess return regressions. Note that this plot suggest a *positive* correlation between PD and expected returns:


| Survey              | Correlation |
| ------------------- | ----------- |
| UBS Gallup 1yr      | .79         |
| Shiller Survey 1yr  | .38         |
| Shiller Survey 10yr | .66         |

while their empirical correlation is *negative*!

It is possible to utilize a formal test for the idea that investors' expectations do not instance RE nor excess-return ideas (Adam, Marcet and Beutel, 2017). Observed expectations are defined as $S_{t,n} = \mathbb{E}_{t}^{\mathcal{P}} [R_{t,n}] + v_{t}$ where the first term represents expectations and $v_t$ is a measurement error. In fact, agents might also report inconsistently, as they might not be sure about their opinions. Regress:

$$
\mathcal{S}_{t,n} = a^n + \phi^n \frac{P_{t}}{D_{t}} + u_{t}^n
$$

^1177f5

to find an estimate $\hat{\phi}^n$. Then, regress:

$$
R_{t,n} = a^n + \bar{\phi}^n \frac{P_{t}}{D_{t}} + U^n_{t}
$$

to find an estimate $\hat{\bar{\phi}}^n$. Under RE, these should be identical, since the residual should still be orthogonal to the regressions. In fact, plugging in $\mathcal{S}_{t,n} = \mathbb{E}_{t} [ R_{t,n} ] + v_{t}$ for the true expectation $\mathbb{E}$ into [[#^1177f5]]:

$$
R_{t,n} = a^n + \phi^n \frac{P_{t}}{D_{t}} + u_{t}^n - v_{t} + \epsilon^n_{t+n}
$$

for the true prediction error $\epsilon_{t+n}^n$. Clearly, $\mathbb{E}\left[  (u_{t}^n - v_{t} + \epsilon_{t+n}^n) \frac{P_{t}}{D_{t}} \right] = 0$ because $u$ is a regression error, $v$ is a measurement error assumed as orthogonal, and $\epsilon_{t+n}^n$ is a "true" forecasting error. The hypothesis $\phi^n = \bar{\phi}^n$ can be tested by [[Microeconometrics#SURE model|SURE]] and is, in fact, rejected:


| Survey measure           | $\hat{\phi}^n \cdot 10^3$ | $\hat{\bar{\phi}}^n \cdot 10^3$ | *p* value |
| ------------------------ | ------------------------- | ------------------------------- | --------- |
| UBS*, all, 1yr, Michigan | 0.53                      | -2.93                           | 0.0000    |
| Shiller, 1yr, Michigan   | 0.28                      | -1.48                           | 0.0000    |
| Shiller, 10yr, Michigan  | 3.51                      | -6.48                           | 0.0000    |


This regression also allows to attempt model matching. A good model should match there variables, but this is not the case.

A similar test was developed by Coibion and Gorodnichenko as:

$$
R_{t,n} - \mathcal{S}_{t,n} = A^n + B^n \frac{P_{t}}{D_{t}} + \epsilon_{t}
$$

or similarly

$$
R_{t,n} - \mathcal{S}_{t,n} = A^n + B^n (R_{t-n},n - \mathcal{S}_{t-n,n}) + \epsilon_{t}
$$

where the null (rejected) is $B^n=0$. The test is identical to AMB, since $B^n = \bar{\phi^n} - \phi^n$.

### Asset Prices under Bayesian-RE and Disagreement

#### Learning about Fundamental shocks

In Bayesian models, agents do not know all the moments of the fundamental data generating process. In this section, we analyze a model of learning about fundamental shocks. This model is interesting to explore if Bayesian RE converge to RE, and if so how fast, and whether Bayesian RE can be used as a bounded substitute for RE.

Consider a special case of Lucas' model with no risk aversion $u(C) = C$ and $W_{t}=0$. The growth rate of dividends follows $\frac{D_{t}}D{D_{t+1}} = 1 + G + \epsilon_{t}$ with mean zero iid error. Under RE, this case implies $\mathbb{E}_{t} D_{t+j} = (1 + G)^j D_{t}$. Therefore, under RE:

$$
\begin{align*}

P_{t} &= \sum_{j_=0}^\infty \beta^j (1 + G)^j D_{t}
\\
&= \frac{\beta (1+G)}{1 - \beta(1+G)} D_{t}
\end{align*}
$$

^2a7dd9

which implies a constant PD ratio.

Let us now introduce learning about dividends in this special case. Assume agents don't know the value of $G$, but have an initial belief about the growth rate such as:

$$
1 + G \sim \mathcal{N}(m_{0}, \sigma_{0})
$$

Other than this, they know that $D_t$ follows the process described in [[#^2a7dd9]]. Agents have a fully consistent model of dividends and they use this to evaluate their utility. The only deviation from Lucas' model is that investors maximize the expectation given agents' imperfect knowledge about the dividend process, $\tilde{\mathbb{E}}_{t}$. Thus, agents do not maximize the *true* distribution, and rather the distribution conditional on their imperfect knowledge about the dividend process. For the $t=0$ perspective, this is equivalent to $\frac{D_{t}}{D_{t-1}} = \mathcal{N} (m_{0},\sigma_{0}+\sigma_{\epsilon})$. Given the information at $t$, this is equivalent to $\mathcal{N} (m_{t}, P_{t}^e)$, where $P_{t}^e =\text{Var}_{t}(a_{t})= \mathbb{E}_{t}(a_{t} - \underbrace {\mathbb{E}_{t} [a_{t}] }_{m_{t}} )^2$. Thus, optimal behavior implies:

$$
P_{t} = \tilde{\mathbb{E}}_{t} \sum_{j=1}^\infty \beta^j \frac{u'(C_{t+j})}{u'(C_{t})}D_{t+j}
$$

To compute this, remember that agents know the likelihood of $D$ but don't know $G$. Since they know the model:

$$
\begin{align*}
\tilde{\mathbb{E}}_{t} &= \tilde{\mathbb{E}}_{t} \left[  \prod_{i=1}^j (1 + G + \epsilon_{t+j}) D_{t} \right]
\end{align*}
$$

By iid error with zero mean, $\tilde{\mathbb{E}}_{t} D_{t+j} = D_{t} \sum_{j=1}^\infty \beta^j \tilde{\mathbb{E}}_{t}[ (1 + G)^j ]$. Taking an approximation, $\tilde{\mathbb{E}}_{t} [ (1+G)^j ] \approx (\tilde{\mathbb{E}}_{t} [ 1 + G] )^j$, so that:

$$
P_{t} \approx \frac{\beta m_{t}}{1 - \beta m_{t}} D_{t}
$$

To find $m_{t}$ in a general setup, we resort to the [[Advanced Econometric Methods III#State space modelling|Kalman filter]]. A summary is provided below.

#### The Kalman Filter

Consider a multivariate system:

$$
\begin{align*}
x_{t} &= B a_{t} + \epsilon_{t}
\\
a_{t} &= C a_{t-1} + \eta_{t}
\end{align*}
$$

^fba960

with $\overset{\mathrm{i.i.d.}}{\sim}$ zero-mean errors. The perceived distribution for initial $a_0$ (the prior, $f_{a_{0}}$) is fixed. All parameters $B,C$ and the distributions of the errors are known. While $a$ is the unobserved "true" state, $x$ is the observed signal, which we must forecast based on previous values. Note that $\mathbb{E}[x_{t+1} \,|\, x^t] = C \mathbb{E} [a_{t} \,|\, x^t ]$ for a history $x^t \equiv (x_{t}, x_{t-1},\dots,x_{0})$. Therefore, the problem boils down to finding $m_{t} \equiv \mathbb{E}[a_{t} \,|\, x^t]$.
In a general, non-linear setup we should keep track of the entire posterior distribution of $a$, and all previous values in history $x^t$ would be needed to formulate $m_t$. In the Kalman filter, however, the formula for $m_t$ is recursive under the following assumptions:
- Parameters $B,C$ are known, together with the linear law of motion in [[#^fba960]]
- $\epsilon,\eta$ are Gaussian with known variances
- The initial perceived distribution is also Gaussian: $a_{0} \sim f_{a_{0}} = \mathcal{N} (m_{0}, \sigma_{0})$
If these hold, then $m_{t}$ is a function of $m_{t-1}$ and $x_t$.

For the univariate case, the optimal forecasts are given by:

$$
m_{t} = m_{t-1} + \frac{1}{\alpha_{t}} (x_{t} - m_{t-1})
$$

^ccc7ed

where

$$
\begin{align*}
\alpha_{t+1} &= 1 + \frac{\alpha_{t}}{1 + \alpha_{t} \frac{\sigma_{\eta}^2}{\sigma_{\epsilon}^2}}
\\
a_{1} &= \frac{\sigma_{\eta} + \sigma_{\epsilon} + \sigma_{0}}{\sigma_{\eta} + \sigma_{0}}
\end{align*}
$$

For illustration, consider these cases:
- **Case 1:** $\sigma_{\eta} = 0$ and $\sigma_{0} = \infty$. In this case, $G$ is a constant and we have no prior knowledge, as in classical econometrics. Then, one can work out that the previous formulae yield $\alpha_{t} = t$ and $m_{t} = \bar{m}^{t-1} = \frac{1}{t} \sum_{i=1}^t x_{i}$, the simple sample average.
- **Case 2:** $\sigma_{0} \in \mathbb{R}$, as in Bayesian econometrics. Then, $m_{t} = \frac{1}{t + \alpha_{1}} \left(  \sum_{i=1}^t x_{i} + \alpha_{1} m_{0}  \right)$ is the **Bayesian posterior mean**.
- **Case 3:** $\sigma_{\eta} > 0$ and $\sigma_{0} \in \mathbb{R}$, as in time varying VARs. That is, $a$ is an unobserved time-varying *ex ante* growth rate that follows a unit root process. In this case, it holds that the gain $\alpha_{t} \to \alpha^{\mathrm{ss}}$, where the latter solves:

$$
\alpha^\mathrm{ss} = 1 + \frac{\alpha^\mathrm{ss}}{1 + \alpha^\mathrm{ss} \frac{\sigma_{\eta}^2}{\sigma^2_{\epsilon}}}
$$

Most papers take this relationship in the long run and consider [[#^ccc7ed]] as:

$$
m_{t} = \frac{1}{\alpha} \sum_{i=1}^t \left(  1 - \frac{1}{\alpha}  \right)^i x_{t-1} + \left(  1 - \frac{1}{\alpha}  \right)^{t+1} m_{0}
$$

so that  $m$ is a geometric average of its past values. The steady state gain $\frac{1}{\alpha}$ is lower for a higher $\sigma^2_{\epsilon}$, meaning that if the transitory shock $\epsilon$ has higher variance, less weight is put on recent observations.
 
### Disagreement

Once we consider deviations from RE, we open the door to considering different perceptions across investors: **disagreement**. The paper by Vissing-Jorgensen (2004) reports the standard deviation of expected returns across investors interviewed in the survey. Disagreement is large and, interestingly, larger at the peak of the dot.com bubble. Many papers find similar patterns for other periods and other assets.

Consider a Lucas' model with two heterogeneous agent RE such that each maximizes:

$$
\max_{ \{ S_{t}^i, C_{t}^i \}} \mathbb{E}_{0} \sum_{t=0}^\infty (\beta_{i})^t u_{i} (C_{i,t}) \text{ such that } C_{i,t} + S_{i,t} + \sum_{\omega} p_{t,b}(\omega) b_{i,t}(\omega) = W_{i,t} + S_{i,t-1}(P_{t} + D_{t}) + b_{i,t-1}(\omega_{t})
$$

Assuming complete markets. With FOC:

$$
\begin{align*}
u_{i}'(C_{i,t}) P_{t} &= \beta \mathbb{E}_{t} [ (u^i)' (C_{t+1}^i)(P_{t+1} + D_{t+1} ) ]
\\
P_{t} &= \mathbb{E}_{t} \sum_{j=1}^\infty (\beta^i)^j \frac { (u^i)'(C_{t+1}^i) } { (u^i)'(C_{t}^i) } D_{t+j}
\end{align*}
$$

The problem can be solved from the perspective of a planner with Pareto weights $\alpha$ without prices of bonds:

$$
\begin{gather*}
\max_{\{ C_{t}^1, C_{t}^2 \}} \alpha \mathbb{E}_{0} \left[  \sum_{t=0} ^ \infty (\beta^1)^t u^1 (C^1_{t})  \right] + (1-\alpha) \mathbb{E}_{0} \left[  \sum_{t=0}^\infty (\beta^2)^t u^2 (C_{t}^2)  \right]
\\
\text{such that } \quad C_{t}^1 + C_{t}^2 = W_{t}^1 + W_{t}^2 + D_{t} \equiv \boldsymbol{\mathbf{W}}_{t}
\end{gather*}
$$

with FOC:

$$
\frac{(u^1)'(C_{t}^1)}{(u^2)'(C_{t}^2)} = \left(  \frac{\beta^2}{\beta^1} \right)^t \frac{1-\alpha}{\alpha}
$$

this FOC, combined with the feasibility condition, allows to solve for the $C$s. So, given some $\alpha$, each consumption path is a fixed function of total output $\boldsymbol{\mathbf{W}}_{t}$, and the pricing equation finally yields $P$.

So far, we assumed that agents are homogeneous, apart from the following:
- Different $W^i$ leading to full risk sharing. Moreover, if $u^i$ are CRRA with same RRA coefficient, prices are just the same as if there were a unique representative agent ([[Advanced Macroeconomics III (Jeenas)#^65722f]] which implies Gorman aggregation as a specific case).
- Different utility. Suppose $u^1(\cdot)$ is concave, but $u^2(C) = C$. Then, agent 2 perfectly insures agent 1.
- Different discount factors. If $\beta^1 < \beta^2$, then $\lim_{ n \to \infty } c_{t}^1 = 0$.
However, in all these cases, both agents affect the pricing of the stock.

Things change when agents disagree about how to forecast $D,W$. For simplicity, assume that agents are otherwise homogeneous, and focus on Markov models where the conditional density is $f_{t-1} ( D_{t}, W_{t} \,|\, (D,W)^{t-1}) = \mu(D_{t},W_{t}; D_{t-1},W_{t-1})$ for a time-invariant function $\mu$. In particular, denote $\mu_{t} \equiv \mu(D_{t},W_{t}; D_{t-1},W_{t-1})$. The density or likelihood of the observed sample is, thus, $f((D,W)^t) = \prod_{j=1}^t \mu_{j}$.
Now, assume that investor $i$ knows that $D,W$ is Markov, but they think that $f_{t}(D_{t},W_{t} \,|\, (D,W)^{t-1}) = \mu^i (D_{t}, W_{t} ; D_{t-1}, W_{t-1})$. To the extent that $\mu \neq \mu^i$, RE are not satisfied. To the extent that $\mu^1 \neq \mu^2$, disagreement takes place.
Now, $i$'s utility is given by $\tilde{\mathbb{E}}^i_{0} \sum_{t=0}^\infty \beta^t u(C_{t}^i)$ where $\tilde{\mathbb{E}}_{t}^i$ is computed with $,\mu^i$. From a general equilibrium standpoint, this is equivalent to a case where agents simply have different utility. Then, the FPWF and SPWF continue to hold under complete markets. Put simply, disagreement does not break Arrow Debreu, since different probabilities attached to future states can be incorporated in the utility function, and AD only relies on utility functions, regardless that such utility functions differ.
Competitive equilibrium solves:

$$
\begin{gather*}
\max_{\{ C_{t}^1, C_{t}^2 \}} \alpha \tilde{\mathbb{E}}^1_{0} \left[  \sum_{t=0} ^ \infty (\beta^1)^t u^1 (C^1_{t})  \right] + (1-\alpha) \tilde{\mathbb{E}^2_{0}} \left[  \sum_{t=0}^\infty (\beta^2)^t u^2 (C_{t}^2)  \right]
\\
\text{such that } \quad C_{t}^1 + C_{t}^2 = \boldsymbol{\mathbf{W}}_{t}
\end{gather*}
$$

for some Pareto weight $\alpha$. The planner FOC is as follows:

$$
\begin{align*}
\frac{u'(C_{t}^1)}{u'(C_{t}^2)} &= \frac{1 - \alpha}{\alpha} \prod_{j=1}^t \frac{\mu_{j}^2}{\mu_{j}^1}
\\
&= \frac{\mu^2_{t}}{\mu_{t}^1} \frac{u'(C_{t-1}^1)}{u'(C_{t-1}^2)}
\end{align*}
$$

An important result is that disappearance from the market is very slow, basically contradicting the Friedman hypothesis. This is normally exemplified by agents who are completely off, or Aumann's "common knowledge" assumption. However, the Friedman hypothesis is wrong. Consider the case with a wrong agent and compute the expectation:

$$
\begin{align*}
\mathbb{E}_{t} \left[  \frac{\mu_{2,t+1}}{\mu_{1,t+1}} \frac {u'(C_{1,t})}{u'(C_{2,t})} \right] &= \int \frac{\mu_{2,t+1}}{\mu_{1,t+1}} \frac {u'(C_{1,t})}{u'(C_{2,t})} \mu_{t+1}(\omega) \, d\omega 
\\
&= \int \mu_{2,t+1} \frac {u'(C_{1,t})}{u'(C_{2,t})} \, d\omega 
\\
&= \frac {u'(C_{1,t})}{u'(C_{2,t})} \int \mu_{2,t+1} \, d\omega 
\\
&= \frac {u'(C_{1,t})}{u'(C_{2,t})}
\end{align*}
$$

Now take the limit of, and notice that the identity is equal at all times only if $u'(C_{1,t}) \to \infty \Leftrightarrow C_{1,t} \to 0$. Unless conjectures aren't crazy (usually, full support is sufficient), the ratio of $\mu$ will be close to 1, so market disappearance will be slow in complete markets.
The Friedman hypothesis holds only in very special cases, such as where one of the agents is completely wrong, such as assigning probability 0 to an event with positive probability. This guy will be blown out of the water with arbitrage (opponents will invest enormously on that) -- in general, agents should at least have correct beliefs on the support of the density/mass. Another case is information asymmetry where agents are all risk neutral.

Aggregation also does not hold: not only individual consumption depends on aggregate endowments, but this also includes the subjective probabilities. Thus, the product of the densities will become another state variable to keep track of to compute, for instance, capital stock or stock prices.

Not only expectations on stochastic variables may be mistaken; but also, agents' may hold mistaken beliefs about the actual pricing functions. Behind Bayesian learning, then, there is a RE assumption involving knowledge of the dynamics of the economy.

#### Disagreement and Asset Pricing

Asset prices *incorporate* opinions about stocks. Important results show that, if opinions (in particular, priors) were identical and correct, no trade would occur in equilibrium -- the so called [[Information, Trade, and Common Knowledge|no-trade theorems]]. A whole body of literature incorporates this idea as "agree to disagree". Important results include that mistaken agents may survive forever (Blume and Easley, 2006) or that this elicits additional volatility in stock prices. In fact, X-CAPM models show how agents interact in incomplete markets, but does not explain stock market volatility well.

Various papers emphasize that different expectations augment the effects of market frictions. In what follows, we will discuss such effects on **debt limits**. Suppose there are two possible realizations for aggregate dividends, $s \in \{  H,L \}$. The budget constraint for agent $j$ in period $t$ is:

$$
c_{t}^i + \sum_{s \in \{ H,L \}} p_{t}^{b,s} b_{t}^i(s) = b_{t-1}^i (s_{t}) + w_{t}^i 
$$

It turns out that, in order for this to be a well defined problem, we need to assume that consumers face debt limits $b_{t}^i(s) \ge - B(s)$ for all $t$ for some debt limit $B(s) > 0$: basically, a transversality condition. Otherwise, complete markets are recovered if this condition never binds (Ponzi game). Consider the case where $B(s)$ binds. The FOCs are, for each agent and bond:

$$
\begin{align*}
p_{t}^{b,s} u'(c_{t}^j) &= \delta u' (c_{t+1}^j (s_{t+1}=s)) \mu^{s,j} & \text{ if } b_{t}^j(s) &= - B(s)
\\
p_{t}^{b,s} u'(c_{t}^j) &> \delta u' (c_{t+1}^j (s_{t+1}=s)) \mu^{s,j} & \text{ if } b_{t}^j(s) &> - B(s)
\end{align*}
$$

Suppose that one agent, $1$, is more optimistic, that is $\mu^{H,1} > \mu^{H,2}$. Intuitively, equilibrium is such that $b_{t}^1(H) > 0$ and $b_{t}^2(H)<0$, and vice versa for $L$. That is, agents buy (issue) bonds contingent on their relative more (relatively less) likely scenario. Intuitively, it must be that:

$$
\begin{align*}
b_{t}^1(H) &> 0 & b_{t}^1(L) &< 0
\\
b_{t}^2(H) &<0 & b_{t}^2(L) &> 0
\end{align*}
$$

Of course, when the negative values $b_{t}^2(H)$ approach $-B(s)$, the price of the high contingent bond will likely hold with equality (the constraint is binding). Then,

$$
\begin{align*}
p_{t}^{b,H} &= \frac { \delta u' ( c_{t+1}^1 ( s_{t+1} = H ) ) \mu^{s,1} } { u'(c_{t}^1) }
\\
p_{t}^{b,L} &= \frac { \delta u' ( c_{t+1}^2 ( s_{t+1} = L ) ) \mu^{s,1} } { u'(c_{t}^2) }
\end{align*}
$$

that is, agent 1 is the marginal agent for the $H$ bond, and vice versa for the $L$ bond: only the marginal agents beliefs matter for pricing their respective bond.
A stock is the same as a portfolio of dividends and price, that is $b_{t}^j(H) = D(H) + P(H)$. No arbitrage pricing implies that the price of a stock is:

$$
\begin{align*}
P_{t}^{\text{stock}} &= p_{t}^{b,H} ( D(H) + P(H) ) + p_{t}^{b,L} ( D(L) + P(L) )
\\
&= \frac{\mu^H}{\mu^H} p_{t}^{b,H} ( D(H) + P(H) ) + \frac{\mu^L}{\mu^L} p_{t}^{b,L} ( D(L) + P(L) )
\\
&= \dots
\\
&= \mathbb{E}_{t} [ \delta \xi_{t+1} ( D_{t+1} + P_{t+1}^{\text{stock}}) ]
\end{align*}
$$

where $\xi_{t+1}(H) = \frac{ \delta u' (c_{t+1}^1 (s_{t+1}=H)) \mu^{s,1} }{ u'(c_{t}^1) \mu^s }$ and similar for $L$, with $\mu^s$ being the true moments and probability of the states. Disagreement brings uncertainty about the marginal agent pricing the asset each period.

Papers exist along this literature:
- Scheinkman and Xiong (2003) on price bubble through frenzied trading;
- Over-investment: Bolton, Scheinkman and Xiong (2006)
- Crashes: Abreu and Brunnermeier (2003) and Hong and Stein (2003);
- Credit cycles: Geanakoplos (2010).
For a survey, see Xiong's *Bubbles Crises and Heterogeneous Beliefs*. A big issue with this literature is that ***agents agree on the pricing function***. They only disagree about future returns to the extent they disagree about probabilities of future $D,W$. That is, they instance Bayesian-RE. As a consequence, few of those papers explain observations *quantitatively*, and most find insufficient volatility of stock prices.

#### Self-referential learning

Self-referential learning involves learning endogenous variables: expectation thus ends up determining equilibrium quantities, but since agents learn from prices, then prices also affect expectation back, in a feedback loop that gives place to non-trivial dynamics. Relating this to the previous example, this can be interpreted as if expectations about prices influence the final bond price, which did not happen in previous cases.

Suppose agents don't know how prices are formed. To form their expectations, they use some econometric model. Assume that $\tilde{\mathbb{E}}_{t} [ D_{t+1}] = D^e$ with $D^e$ exogenous and independent of prices.

$$
\begin{align*}
P_{t} &= \beta \tilde{\mathbb{E}}_{t} (P_{t+1} + D_{t+1})
\\
&= \beta \tilde{\mathbb{E}}_{t}(P_{t+1}) + \beta D_{t}^e
\end{align*}
$$

What are the dynamics of prices if agents learn about how to form $\tilde{\mathbb{E}}_{t} [P_{t+1}]$? To obtained closed-form solutions, we also assume that $D_{t}^e = \mu + \epsilon_{t}$ is a mean-zero random walk. Suppose investors believe prices follow the **perceived law of motion** (PLM)

$$
\begin{align*}
P_{t} &= m + v_{t}
\\
v & \overset{\mathrm{i.i.d.}}{\sim} \mathcal{N} (0, \sigma^2_{v})
\\
m & \sim \mathcal{N} (m_{0}, \sigma_{0})
\end{align*}
$$

and, given such beliefs, knowledge and priors, they learn about mean prices using the Kalman filter (more below) given $m_{0}, \alpha_{1}$. Does $m_t$ converge? It is not obvious, as learning is self-referential. Learning is **self-referential** if $m$ depends on $P$ but $P$ depends in turn on $m$. 

Assume for now they are certain about the arbitrary value of $m$. Put simply, there is no learning and they are stuck at some non-RE $m$. Sticking these expectations in the model we get the **actual law of motion** (ALM):

$$
P_{t} = [\beta m + \beta \mu] + \beta\epsilon_{t}
$$

which implies that the actual mean of tomorrow's price is $\mathbb{E}_{t}[ P_{t+1} ] = \beta m + \beta \mu \equiv T(m \,|\, \beta, \mu)$.
Put simply, $T$ maps perceived to actual expectations; RE is fixed point in this mapping:

$$
T(m^{\text{RE}} \,|\, \beta, \mu) = m^{\text{RE}} = \frac{\beta \mu}{1-\beta}
$$

While the simple mapping $T$ was basically equivalent to what old Keynesian models were doing, the fixed point is basically an incorporation of Lucas' famed recommendation into a learning framework. Plugging the fixed-point value into the actual law of motion, we get the actual rational expectations price $P_{t}^{\text{RE}} = \beta \frac{\beta \mu}{1 - \beta} + \beta D_{t}^e$. This is what we have been doing for our entire careers with rational expectations.

Suppose now that agents are less stubborn, and have the following PLM:

$$
\begin{align*}
P_{t} &= m + v_{t}
\\
v &\overset{\text{iid}}\sim \mathcal{N} (0, \sigma_{v}^2)
\\
m &\sim \mathcal{N} ( m_{0}, \sigma_{0} )
\end{align*}
$$

Given this model and this prior knowledge, the expectation can be derived as the optimal belief through the Kalman filter:

$$
\begin{align*}
\tilde{\mathbb{E}}_{t} [P_{t+1}] &\equiv m_{t}
\\
&= m_{t-1} + \frac{1}{t + \alpha_{1}} (P_{t} - m_{t-1})
\end{align*}
$$

which creates a feedback. When agents believe in this Kalman filter for Bayesian updating, they can update optimally their $m$ given their model, which is then used as an input in the price $P_{t} = [ \beta m _{t} + \beta \mu] + \beta \epsilon_{t}$. Expectations of agents influence actual prices. It is not obvious that this procedure converges, but a convergence theorem from engineering could eventually be applied to this case. Note that $\mathbb{E}_{t}[P_{t+1}] = \beta m_{t} + \beta \mu \equiv T(m_{t})$ is basically and OLS. A theorem by Ljung guarantees that $m_{t} \to m^{\text{RE}}$ if and only if the non-stochastic ordinary differential equation

$$
\dot{m} = T(m) - m
$$

is stable (converges). Finding stability of this equation is relatively easy. Since $T' = \beta < 1$, this is a discrete nonstochastic system, and least squares learning works just as small steps towards the true expectation. If, instead, $T'>1$, then these small steps would lead us away from RE. This suggests that not only the rational expectations algorithm, but also the perceived expectations algorithm should contribute to inform expectations robust policy. Moreover, as RE models may exhibit multiple equilibria, these can be used as selection criteria to choose stable rather than unstable RE equilibria (see Woodford).

> [!proposition] E-stability
> $$
> z_{t} = T(m_{t}) z_{t-1} + V(m_{t-1}) \epsilon_{t}
> $$
>
> where $m_t$ is OLS estimate of $m$.
>
> $$
> z_{t} = m z_{t-1} + V(m_{t-1}) \epsilon_{t}
> $$
>
> Then, $m_{t} \to m^{\text{RE}}$ if and only if the o.d.e. $\dot{m} = T(m) - m$ is stable. That is , there is local convergence if all eigenvalues of $\frac{ \partial T(m^{\text{RE}}) }{ \partial m' }$ are less than 1 in real part.

Mistake in last slide:

$$
\begin{align*}
m_{t} &= m_{t-1} + \frac{1}{\alpha} ( [\beta m_{t-1} + \beta \mu] + \beta \epsilon_{t} - m_{t-1} )
\\
&= m_{t-1} \left( 1 + \frac{\beta-1}{\alpha} \right) + \frac{1}{\alpha} (\beta \mu + \beta \epsilon_{t})
\end{align*}
$$

Basically, $m_{t}$ is an AR(1), stable for $\beta<1$. Williams (2019) shows that, in a general model, constant gain learning behaves like $\dot{m} = T(m) - m$.

What if an algorithm different than OLS is used? For example, $m_{t} = m_{t-1} + \frac{1}{v_{t}} (P_{t} - m_{t-1})$. Clearly, $v_{t} \to \infty$ must go to infinity to have a chance of convergence; but something more is needed. In fact, substituting out:

$$
\begin{align*}
m_{t} &= m_{t-1} + \frac{1}{t} \left(  P_{t} - m_{t-1} + \frac{1}{t-1} (P_{t} - m_{t-2}) \right)
\\
&= m_{t-1} + \sum_{j=N(t,\alpha)}^{t} \frac{1}{t-j} \left(  \sum_{k=0}^j m_{t-k}  \right)
\end{align*}
$$


with $N(t,\alpha)$ chosen such that $\sum_{j=N(t,\alpha)}^{0} \frac{1}{t-j} = \alpha$. If $t$ goes to infinity too quickly, the sum is not absolutely summable and does not converge to infinity. In other words, update is not fast enough relative to time, and learning does not occur.

> [!example|*]- A Learning Model of Real Money Balances
> Suppose the price level follows the process:
> 
> $$
> \begin{align*}
> P_{t} &= \delta \tilde{\mathbb{E}}_{t} [P_{t+1}] + \gamma M_{t}
> \\
> M_{t} &= \rho M_{t-1} + v_{t}
> \\
> \tilde{\mathbb{E}}_{t} [ P_{t+1} ] &= \beta_{t-1} M_{t}
> \end{align*}
> $$
> 
> Then, the perceived law of motions is:
> 
> $$
> P_{t+1} = \beta M_{t} + U_{t+1}
> $$
> 
> and can be solved by OLS. In this case, this is $\beta_{t} = \frac { \sum_{i=0}^t M_{i-1} P_{i} } { \sum_{i=1}^t M_{i-1} }$. This implies that:
> 
> $$
> \begin{align*}
> P_{t} &= \delta \beta_{t-1} M_{t} + \gamma M_{t}
> \\
> \mathbb{E}_{t} [ P_{t+1} ] &= \mathbb{E}_{t} [ (\delta\beta_{t} + \gamma ) M_{t+1} ]
> \\
> &= \underbrace{ (  \delta \beta_{t}  + \gamma ) \overbrace{\rho M_{t}}^{\equiv\mathbb{E}_{t} [M_{t+1} ]} }_{ \equiv T(\beta) }
> \\
> T'(\beta^{\mathrm{RE}}) &= \rho\delta
> \end{align*}
> $$
> 
> which converges only if $\rho\delta < 1$.

### A Generic Model of Learning

Agents have to forecast a variable $z^1$ given information on $z^2$. Let vector-valued $z_{t}$ contain all the variables, including $z^1$ and $z^2$. Assume that the model is such that equilibrium $z_{t}$ depends on agents' forecast $\tilde{\mathbb{E}} [ z_{t+1}^1 \,|\, z_{t}^2]$. Agents' perceived law of motion is:

$$
z_{t}^1 = \beta' z_{t-1}^2 + u_{t}
$$

so that they set

$$
\tilde{\mathbb{E}} [ z_{t+1}^1 \,|\, z_{t}^2 ] = \beta_{t}' z_{t}^2
$$

^aa25f4

for some $\beta_{t}$ not yet determined. Assume the model is such that, in this case, the true evolution of the series is:

$$
z_{t} = A(\beta_{t}) z_{t-1} + B( \beta_{t}) \epsilon_{t}
$$

^308db5

and in particular that

$$
z_{t}^1 = T(\beta_{t})' z_{t-1}^2 + V(\beta_{t}\epsilon_{t})
$$

In this case, agents are correct about what variables drive movements in $z^1$. If agents think that variables evolve with a parameter estimate $\beta_{t}$ so that their expectations are given by [[#^aa25f4]], then the true conditional expectation is given by:

$$
\begin{align*}

\mathbb{E} [ z_{t+1}^1 \,|\, z_{t}^2 ] &= \mathbb{E} [ T(\beta_{t})' z_{t}^2 + V(\beta_{t}) \epsilon_{t+1} \,|\, z_{t}^2 ] 
\\
&= T(\beta_{t})' z_{t}^2
\end{align*}
$$

Therefore, the mapping $T$ maps perceived (coefficients') expectations into actual expectations.

Special cases of this algorithm include:
- Rational expectations, which amounts to $\beta_{t} = \beta_{f} = T(\beta_{f})$.
- Least Squares Learning, which uses OLS to estimate $\beta_{t} = \left( \sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal} \right)^{-1} \sum_{i}^{t-1} z_{i-1}^2 z_{i}^{1\intercal}$
Standard convergences theorems in econometrics, however, do not apply: in standard econometrics. $T$ does not and should not depend on $\beta_{t}$. A new theorems must be provided. Such theorem is presented in Ljung(1977) and Marcet and Sargent (1989a,b).

> [!theorem] General Convergence for Stochastic Approximations
> Define $f(\beta) \equiv \mathbb{E} [Q (z_{t}(\beta), \beta ) ]$ and the ordinary differential equation $\dot{ \beta} = f(\beta)$. Denote $\beta^s$ a stationary point of the o.d.e., $f(\beta^2)=0$.
> 
> If:
> 
> - $\beta$ is given by $\beta_{t} = \beta_{t-1} + \frac{1}{\alpha_{t}} Q (z_{t}, \beta_{t-1} )$
> - $z_{t}$ observed series satisfying [[#^308db5]] with $A$ eigenvalues are less than $1$ in real part
> - $\alpha_{t}$ is a given series of numbers $\alpha_{t} \to \infty$ and $\sum_{t}^\infty \frac{1}{\alpha_{t}} = \infty$
> - $Q$ given functions
> - and some additional technical assumptions
> 
> Then:
> 
> 1) **Claim 1:** $\beta_{t}$ can only converge with positive probability to a stationary point $\beta^s$.
> 2) **Claim 2:** $\beta_{t} \to \beta^s \iff \dot{\beta} = f(\beta)$ stable at $\beta^s$

^242a00

Intuitively, the o.d.e. approach can be represented as:

$$
\frac{\beta_{t} - \beta_{t-1}}{\frac{1}{\alpha_{t}}} = Q ( z_{t}, \beta_{t-1})
$$

where the left-hand side is "close" to $\dot{\beta}$, while the right-hand side is "close" to $f(\beta) \equiv \mathbb{E}[ Q(z_{t}(\beta), \beta) ]$.

> [!rmk]+ OLS is a Case of [[#^242a00]]
>Suppose that $z^1 \in \mathbb{R}$. Note that:
> 
> $$
> \begin{align*}
> \beta_{t} &= \left(  \sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal}  \right) ^{-1} \sum_{i}^{t-1} z_{i-1}^2 z_{i}^1
> \\
> &= \left(  \sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal}  \right) ^{-1} \sum_{i}^{t-2} z_{i-1}^2 z_{i}^1 + \left(  \sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal}  \right) ^{-1} z_{t-2}^2 z_{t-1}^1
> \end{align*}
> $$
> 
> ^f166d7
> 
> 
> Moreover, it holds that
> 
> $$
> \left(  \sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal}  \right) ^{-1} \sum_{i}^{t-2} z_{i-1}^2 z_{i}^1 =  \left(  \sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal}  \right) ^{-1}  \left(  \sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal}  \right)  \left(  \sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal}  \right) ^{-1}  \sum_{i}^{t-2} z_{i-1}^2 z_{i}^1 
> $$
> 
> which can be plugged into the first equation to obtain:
> 
> $$
> \begin{align*}
> \beta_{t} &= \beta_{t-1} + \left(  \overbrace{\sum_{i}^{t-1} z_{i-1}^2 z_{i-1}^{2\intercal}}^{t R_{t} }  \right) ^{-1} \left(  z_{t-2}^2 z_{t-1}^1 - z_{t-2}^2 z_{t-2}^{2\intercal} \beta_{t-1}  \right)
> \\
> &= \beta_{t-1} + \frac{1}{t-1} R_{t-1}^{-1} z_{t-2}^2 ( z_{t-1}^1 - z_{t-2}^{2\intercal} \beta_{t-1} )
> \\
> R_{t} &= R_{t-1} +  \frac{1}{t-1} ( z_{t-2}^2 z_{t-1}^1 - R_{t-1} )
> \end{align*}
> $$
> 
> This shows that OLS is a special case of bullet-point one in [[#^242a00]] when we take the following:
> 
> $$
> \begin{align*}
> \beta_{t} &\equiv (\beta_{t}, R_{t})
> \\
> Q( z_{t-1}, \beta_{t-1}, R_{t-1} ) &=
> \begin{bmatrix}
> R_{t-1}^{-1} z_{t-2}^2 (z_{t-1}^1 - z_{t-2}^{2\intercal} \beta_{t-1}) \\
> z_{t-1}^2 z_{t-1}^{2\intercal} - R_{t-1}
> \end{bmatrix}
> \\
> \alpha_{t} &= t-1
> \end{align*}
> $$
> 
> To build the o.d.e. that corresponds to this case, take the expectation of $Q$:
> 
> $$
> \mathbb{E} [ Q(z_{t-1}(\beta),\beta,R)] = \mathbb{E}
> \begin{bmatrix}
> R_{t-1}^{-1} z_{t-2}^2 (z_{t-1}^1 - z_{t-2}^{2\intercal} \beta_{t-1}) \\
> z_{t-1}^2 z_{t-1}^{2\intercal} - R_{t-1}
> \end{bmatrix} = 
> \begin{bmatrix}
> R_{t-1}^{-1} \mathbb{E} [ z_{t}^2 z_{t}^{2\intercal} ] ( T(\beta) - \beta ) \\
> \mathbb{E} [ z_{t}^2 z_{t}^{2\intercal} ] - R
> \end{bmatrix}
> $$
> 
> Note that the second moment $\mathbb{E} [ z_{t}^2 z_{t}^{2\intercal} ]$ is a function of $\beta$, since $M_{z^2}(\beta) = \mathbb{E} [ z_{t}^2(\beta) z_{t}^{2\intercal}(\beta) ]$. This gives the associated o.d.e.:
> 
> $$
> \begin{align*}
> \dot{\beta} &= R^{-1} M_{z^2}(\beta) (T(\beta) - \beta)
> \\
> \dot{R} &= M_{z^2}(\beta) - R
> \end{align*}
> $$
> 
> A stationary point of this o.d.e. is at $\beta_{f} = T(\beta_{f})$ and $R = M_{z^2} (\beta_{f})$. So, $R^{-1} M_{z^2}(\beta)$ cancels out and the only relevant condition for stability is E-stability, that is $\dot{\beta} = T(\beta) - \beta$.

This idea can be extended to:
- multivariate $z^1$
- private information (Marcet and Sargent, 1989b)
- non-linear models (Kuan and White, 1994; Chen and White, 1998)
- Other learning schemes
- Some non-stationary models

As Sargent once put it, there is a general idea that deviating from RE hurls analysts into the "wilderness of irrationality". The main arguments usually put forward against learning are the following:
1) **Lack of discipline**. Any kind of expectations could be validly assumed, generating wilderness.
2) **Unfalsifiability**. Liberalizing learning and irrational expectations creates *ad hoc* models that cannot fail. This resonates with the large old Keynesian models of the 70s.
3) **Irrationality**. While learning about fundamental shocks is considered acceptable, most economists would reject that agents view prices as deviating from fundamentals.

These good concerns can easily find counterarguments in support of learning.
1) Expectations can be disciplined through empirical validation, such as looking at surveys and testing if the PLM are compatible with observed data on expectations.
2) If unfalsifiability is imputed to overparametrization, learning models are no-more overparametrized than many RE models. In particular, it is possible to design parsimonious learning models in terms of parameters.
3) If agents learn about prices, expectations don't need to be "fairly good". The only required criterion may be "internal rationality".

#### Internal Rationality

(To be continued continue)