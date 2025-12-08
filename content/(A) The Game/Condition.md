---
aliases:
  - Grabbed
  - Restrained
  - Immobile
  - Paralyzed
  - Slow
  - Stunned
  - Dazzled
  - Blind
  - Deaf
  - Clumsy
  - Feeble
  - Strained
  - Unconscious
  - Peril
  - Dying
  - Stupefied
  - Panicked
  - Enthralled
  - Vulnerable
  - Prone
  - Fatigued
---
*Conditions* are a universal set of statuses that **will** come into play consistently. 

Some conditions have a single on/off effect; others **stack** in levels (marked as X). 

Any **X-condition** always carries a number (its current level). If that number would be **0**, treat the condition as **not applied**.

| Category             | Links                                                                  |
| -------------------- | ---------------------------------------------------------------------- |
| Movement             | Grabbed, Restrained, Immobile, Paralyzed                               |
| Slowing              | Slow X, Stunned X                                                      |
| Sensory              | Dazzled, Blind, Deaf                                                   |
| Crippling            | Clumsy X, Feeble X, Strained X, Fatigued X, Sick X                     |
| Death                | Unconscious, Peril X, Dying X                                          |
| [[Detection Rating]] | (1) Unnoticed, (2) Undetected, (3) Hidden, (4) Concealed, (5) Observed |
| Mental               | Stupefied X, Panicked X, Enthralled                                    |
| Uncategorized        | Vulnerable X, Prone, [[Persistent Damage]]                             |
### Wording Conventions
##### “Suffers *Condition* +X”
- Increase the target’s current level of that condition by **X**.
- This is the most common one.
##### “Is/Becomes *Condition* X”
- Set the target’s current level of that condition to **X** (or **1** if X isn’t specified), **unless** their current level is already higher; in that case, no change occurs.
---
## Body Conditions
#### <u>Clumsy X</u>
*You suffer from slow reflexes and poor balance.*
- You suffer **–1** to **[[1.3 Primary Attribute|AGI]]**-based **[[1.1 Skill Checks|Skill Check]]s** and **[[1.4 Secondary Attribute|Skill DC]]s** per rank of this condition
- You suffer **–1** to **[[1.2 Initiative|Initiative]]** checks per rank of this condition
#### <u>Feeble X</u>
*Strength leaks from you.*
- You suffer a -1 penalty to all **[[1.3 Primary Attribute|PHY]]** based [[1.1 Skill Checks|Skill Check]]s and [[1.4 Secondary Attribute|Skill DC]]s for each rank of this condition.
- You suffer **–X** to damage rolls that would add your [[1.3 Primary Attribute|PHY]] modifier. 
#### <u>Strained X</u>
*Intense load has your body aching with every motion.*
- Your **[[1.5 Characteristics|Speed]]s** are reduced by **5ft** per rank of this condition
- You are **[[Condition|Feeble]] X** and **[[Condition|Clumsy]] X**
#### <u>Fatigued X</u>
*You’re painfully exhausted.*
- You are **[[Condition|Strained]] X** and **[[Condition|Stupefied]] X**
- If **X** reaches **6**, you are **dead**.
#### <u>Sick X</u>
*You shiver, heave, and sweat as your senses go haywire.*
- You cannot willingly [[Ingest]] anything.
- You suffer a -1 penalty to all [[1.1 Skill Checks|Skill Check]]s and [[1.4 Secondary Attribute|Skill DC]]s for each rank of this condition.
---
## Death Conditions

#### <u>Unconscious</u>
*You’re not awake.*
- You cannot [[1.5 Characteristics|Sense]] or do anything.
- You are **Vulnerable 2**.

---
## Mental Conditions

#### <u>Enthralled</u>
*You’re compelled into a certain course of action.*
- This condition’s **specific effect text** directs your behavior; follow those instructions for how you act or may be directed.
#### <u>Panicked X</u>
*Fear and stress overwhelm you.*
- Suffer **–2** to **all** [[1.1 Skill Checks|Skill Check]]s and **[[1.4 Secondary Attribute|Skill DC]]s** **per rank (X)** of Panicked.
#### <u>Stupefied X</u>
*Your mind is fogged and your train-of-thought is jarred.*
- Suffer **–2** to **[[1.3 Primary Attribute|INS]]-, [[1.3 Primary Attribute|IQ]]-, and [[1.3 Primary Attribute|CHA]]-based** [[1.1 Skill Checks|Skill Check]]s and **[[1.4 Secondary Attribute|Skill DC]]s** per rank of Stupefied.
- Whenever you take a **[[2. Action & Effect Traits|{Concentrate}]]** [[Action]] or suffer a **[[2. Action & Effect Traits|{Mental}]]** effect, make a **DC (3X) [[Flat Check]]**; on a failure, either your Concentrate action **automatically fails** or you are **immune to that [[2. Action & Effect Traits|{Mental}]] effect**.
---
## Movement Conditions

#### <u>Grabbed</u>
*You are caught by something and held in place.*
- You are **Immobile**.
- You must succeed on a **DC 3 [[Flat Check]]** to perform any **[[2. Action & Effect Traits|{Manipulate}]]** action.
#### <u>Immobile</u>
*You have your locomotion (walking, swimming, etc.) totally impeded.*
- You are **[[Condition|Vulnerable]]**.
- You cannot use any actions with the **[[2. Action & Effect Traits|{Move}]]** trait.
#### <u>Paralyzed</u>
*You’re a mind in a locked suit of flesh, willing but unable to move.*
- You are **Immobile**.
- You cannot perform [[1. Types of Actions|Action]]s that require any physical movement (even tiny ones).
- You are **Vulnerable 2**.
#### <u>Restrained</u>
*You struggle to meaningfully move against your bindings.*
- You are **Immobile**.
- You cannot use any **[[2. Action & Effect Traits|{Attack}]]** or **[[2. Action & Effect Traits|{Manipulate}]]** action that doesn’t contribute to physically freeing yourself.
## Sensory Conditions

#### <u>Blind</u>
*Light finds no purchase in your eyes.*
- Your movement speeds are **halved**.
- You are immune to **[[2. Action & Effect Traits|{Visual}]]** effects
- You suffer **–4** to **[[Observation|Perception]]** [[1.1 Skill Checks|Skill Check]]s and [[1.4 Secondary Attribute|Skill DC]]
- You decrease your **[[Detection Rating]]** of all creatures by **2 ranks**.
#### <u>Dazzled</u>
*Your vision is blitzed and disrupted.*
- Whenever you would be affected by a [[2. Action & Effect Traits|{Visual}]] effect, you are immune to it on a DC 4 [[Flat Check]].
- Decrease your **[[Detection Rating]]** of all creatures by **1 rank**.
- You suffer **–1** to **[[Observation|Perception]] [[1.1 Skill Checks|Skill Check]]s** and **[[1.4 Secondary Attribute|Skill DC]]**.
#### <u>Deaf</u>
*Your hearing is reduced to the point of desperate tremor-feeling.*
- You are immune to **[[2. Action & Effect Traits|{Auditory}]]** effects
- You suffer **–1** to **[[Observation|Perception]] [[1.1 Skill Checks|Skill Check]]s** and [[1.4 Secondary Attribute|Skill DC]]
## Slowing Conditions
#### <u>Slow X</u>
*Delayed senses and gummed-up muscles drag you down.*
- Whenever you would gain [[1. Types of Actions|Minor ⋄ Action]]s, reduce the number gained by X.
- You can't move more than your base [[1.5 Characteristics|Speed]] in the span of 1 [[1. Types of Actions|Action]]. 
#### <u>Stunned X</u>
*Precious moments slip away from you and your thoughts white-out.*
- You **cannot use [[1. Types of Actions|Reaction ↻]]s**.
- At the start of your turn, you lose **X total actions**, in this order:
	1. Minor ⋄
	2. Major ⟐
	3. Minor ⋄
- After losing these actions, **reduce Stunned by the number of actions lost**.
## Uncategorized Conditions
 
#### <u>X Persistent Y Damage</u>
*You’re stuck with a continual damaging effect.*
- You suffer **X** [[2.1 Damage & Resistance|Damage]] of type **Y** at the **end of your turn**.
- After applying the damage, roll a **DC 9 [[Flat Check]]**; on a success, **remove** this condition.
#### <u>Prone</u>
*You are lying on the ground or otherwise prostrated.*
- You cannot use any **[[2. Action & Effect Traits|{Move}]]** [[1. Types of Actions|Action]]s except **[[Movement Actions|Crawl]]** or **[[Movement Actions|Change Stance]]**.
#### <u>Vulnerable X</u>
*You’re easier to attack and exploit.*
- Your suffer -1 to your [[Core Skills|Reflex]] [[1.4 Secondary Attribute|Skill DC]] per rank of [[Condition|Vulnerable]] (max -2).