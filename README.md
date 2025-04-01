# Awesome-Multi-Turn-LLMs

![](https://img.shields.io/badge/PaperNumber-78-brightgreen)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of **Papers**, **Datasets** and **Code Repositories** for ***Multi-turn Large Language Models***. This repository compiles a majority of research works in the multi-turn LLM field, though it may not be fully exhaustive.

⭐⭐⭐Our detailed thoughts and review of multi-turn LLMs, including task types, common improvements, and open challenges, are presented in this survey:[**A Survey on Evaluation and Enhancement of Large Language Models Multi-turn Interactions**](https://arxiv.xxx).
> If you notice any missing research works or spot inaccuracies, feel free to reach out or open an issue!


## Table of Contents
- [Awesome-Multi-Turn-LLMs](#awesome-multi-turn-llms)
  - [Table of Contents](#table-of-contents)
  - [Keywords Convention](#keywords-convention)
  - [Multi-Turn LLM Tasks](#multi-turn-llm-tasks)
    - [Instruction Following Tasks](#instruction-following-tasks)
      - [Instruction Following in General (Mixed)](#instruction-following-in-general-mixed)
      - [Instruction Following in Math](#instruction-following-in-math)
      - [Instruction Following in Coding](#instruction-following-in-coding)
    - [Conversational Engagement Tasks](#conversational-engagement-tasks)
      - [Conversational Engagement in Roleplay](#conversational-engagement-in-roleplay)
      - [Conversational Engagement in Healthcare](#conversational-engagement-in-healthcare)
      - [Conversational Engagement in Education](#conversational-engagement-in-education)
      - [Conversational Engagement in Jailbreak](#conversational-engagement-in-jailbreak)
  - [Open Challenges](#Open-Challenges)


### Keywords Convention

![](https://img.shields.io/badge/Dataset-blue) New dataset is created in the work.

![](https://img.shields.io/badge/SFT-blueviolet) SFT is used in the work.

![](https://img.shields.io/badge/RL-purple) Reinforcement Learning is used in the work.

![](https://img.shields.io/badge/Benchmark-red) Benchmark is proposed in the work.

![](https://img.shields.io/badge/Improved-yellow) Improved methods is used in the work.



## Multi-Turn LLM Tasks

### Instruction Following Tasks

#### Instruction Following in General (Mixed)  (Total: 1)

- Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena [[NeurIPS 2023]](https://arxiv.org/abs/2306.05685) [[Code]](https://github.com/lm-sys/fastchat) ![](https://img.shields.io/badge/Dataset-blue)  ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/Improved-yellow)
- Parrot: Enhancing Multi-Turn Instruction Following for Large Language Models [[ACL 2024]](https://aclanthology.org/2024.acl-long.525/) [[Hugging Face]](https://huggingface.co/datasets/anon8231489123/ShareGPT_Vicuna_unfiltered) ![](https://img.shields.io/badge/RL-purple)

- MT-Bench-101: A Fine-Grained Benchmark for Evaluating Large Language Models in Multi-Turn Dialogues [[ACL 2024]](https://aclanthology.org/2024.acl-long.401/) [[Code]](https://github.com/mtbench101/mt-bench-101) ![](https://img.shields.io/badge/Dataset-blue) 
               ![](https://img.shields.io/badge/SFT-blueviolet)  ![](https://img.shields.io/badge/RL-purple) ![](https://img.shields.io/badge/Benchmark-red)



#### Instruction Following in Math (Total: 0)


#### Instruction Following in Coding (Total: 0)



### Conversational Engagement Tasks 

#### Conversational Engagement in Roleplay (Total: 24)

- PersonaLLM: Investigating the Ability of Large Language Models to Express Personality Traits [[ACL 2024]](https://aclanthology.org/2024.findings-naacl.229.pdf) [[Code]](https://github.com/hjian42/PersonaLLM)
- CharacterChat: Learning towards Conversational AI with Personalized Social Support [[Arxiv]](https://arxiv.org/abs/2308.10278)  [[Code]](https://github.com/morecry/CharacterChat) ![](https://img.shields.io/badge/Dataset-blue)
- Better Zero-Shot Reasoning with Role-Play Prompting [[ACL 2024]](https://aclanthology.org/2024.naacl-long.228.pdf) [[Code]](https://github.com/NKU-HLT/Role-Play-Prompting)
- PIPPA: A Partially Synthetic Conversational Dataset [[Arxiv]](https://arxiv.org/abs/2308.05884) [[Hugging Face]](https://huggingface.co/datasets/PygmalionAI/PIPPA) ![](https://img.shields.io/badge/Dataset-blue)
- Enhancing Chat Language Models by Scaling High-quality Instructional Conversations [[EMNLP 2023]](https://aclanthology.org/2023.emnlp-main.183.pdf) [[Code]](https://github.com/thunlp/UltraChat)   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Improved-yellow)
- PRODIGy: a PROfile-based DIalogue Generation dataset [[ACL 2024]](https://aclanthology.org/2024.findings-naacl.222.pdf) [[code]](https://github.com/LanD-FBK/prodigy-dataset) ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- ChatHaruhi: Reviving Anime Character in Reality via Large Language Model [[Arxiv]](https://arxiv.org/abs/2308.09597) [[Code]](https://github.com/LC1332/Chat-Haruhi-Suzumiya) ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Improved-yellow)
- CharacterGLM: Customizing Chinese Conversational AI Characters with Large Language Models [[EMNLP 2024]](https://aclanthology.org/2024.emnlp-industry.107.pdf) [[Code]](https://github.com/thu-coai/CharacterGLM-6B) ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- RoleCraft-GLM: Advancing Personalized Role-Playing in Large Language Models [[ACL 2024]](https://aclanthology.org/2024.personalize-1.1.pdf) ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- Large Language Models are Superpositions of All Characters: Attaining Arbitrary Role-play via Self-Alignment [[ACL 2024]](https://aclanthology.org/2024.acl-long.423.pdf) [[Code]](https://github.com/OFA-Sys/Ditto)  ![](https://img.shields.io/badge/Dataset-blue)  ![](https://img.shields.io/badge/Improved-yellow)
- Character-LLM: A Trainable Agent for Role-Playing [[EMNLP 2023]](https://aclanthology.org/2023.emnlp-main.814v2.pdf) [[Code]](https://github.com/choosewhatulike/trainable-agents) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Improved-yellow)
- PersonaPKT: Building Personalized Dialogue Agents via Parameter-efficient Knowledge Transfer [[ACL 2023]](https://aclanthology.org/2023.sustainlp-1.21.pdf)  ![](https://img.shields.io/badge/Improved-yellow)
- LLMs + Persona-Plug = Personalized LLMs [[Arxiv]](https://arxiv.org/abs/2409.11901) [[Hugging Face]](https://huggingface.co/papers/2409.11901) ![](https://img.shields.io/badge/Improved-yellow)
- Neeko: Leveraging dynamic lora for efficient multi-character role-playing agent [[EMNLP 2024]](https://aclanthology.org/2024.emnlp-main.697.pdf) [[Code]](https://github.com/weiyifan1023/Neeko) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Improved-yellow)
-  Instruct Once, Chat Consistently in Multiple Rounds: An Efficient Tuning Framework for Dialogue [[ACL 2024]](https://aclanthology.org/2024.acl-long.219.pdf) [[Code]](https://github.com/iwangjian/Midi-Tuning) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Improved-yellow)
-  Building Persona Consistent Dialogue Agents with Offline Reinforcement Learning [[EMNLP2023]](https://aclanthology.org/2023.emnlp-main.110.pdf) ![](https://img.shields.io/badge/RL-purple)   ![](https://img.shields.io/badge/Improved-yellow) 
-  Beyond Retrieval: Embracing Compressive Memory in Real-World Long-Term Conversations [[Arxiv]](https://arxiv.org/abs/2402.11975) [[Code]](https://github.com/nuochenpku/COMEDY)
                    ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/RL-purple) ![](https://img.shields.io/badge/Improved-yellow)
- LaMP: When Large Language Models Meet Personalization [[ACL 2024]](https://aclanthology.org/2024.acl-long.399.pdf) [[Code]](https://lamp-benchmark.github.io/) ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- CharacterEval: A Chinese Benchmark for Role-Playing Conversational Agent Evaluation [[ACL 2024]](https://aclanthology.org/2024.acl-long.638.pdf) [[Code]](https://github.com/morecry/CharacterEval) ![](https://img.shields.io/badge/Dataset-blue) 
                   ![](https://img.shields.io/badge/Benchmark-red)
- RoleEval: A Bilingual Role Evaluation Benchmark for Large Language Models [[Arxiv]](https://arxiv.org/abs/2312.16132) [[Code]](https://github.com/Magnetic2014/RoleEval)  ![](https://img.shields.io/badge/Dataset-blue) 
                   ![](https://img.shields.io/badge/Benchmark-red)
- TimeChara: Evaluating Point-in-Time Character Hallucination of Role-Playing Large Language Models  [[ACL 2024]](https://aclanthology.org/2024.findings-acl.197/) [[Code]](https://github.com/ahnjaewoo/timechara)  ![](https://img.shields.io/badge/Dataset-blue)
                   ![](https://img.shields.io/badge/Benchmark-red)
- InCharacter: Evaluating Personality Fidelity in Role-Playing Agents through Psychological Interviews [[ACL 2024]](https://aclanthology.org/2024.acl-long.102/) [[Code]](https://incharacter.github.io/) ![](https://img.shields.io/badge/Dataset-blue)
                   ![](https://img.shields.io/badge/Benchmark-red)
- RoleInteract: Evaluating the Social Interaction of Role-Playing Agents [[Arxiv]](https://arxiv.org/abs/2403.13679) [[Code]](https://github.com/X-PLUG/RoleInteract)  ![](https://img.shields.io/badge/Dataset-blue)
                   ![](https://img.shields.io/badge/Benchmark-red)
- Evaluating Character Understanding of Large Language Models via Character Profiling from Fictional Work [[EMNLP 2024]](https://aclanthology.org/2024.emnlp-main.456/) [[Code]](https://github.com/Joanna0123/character_profiling)  
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)

#### Conversational Engagement in Healthcare (Total: 0)

#### Conversational Engagement in Education (Total: 0)

#### Conversational Engagement in Jailbreak (Total: 0)


## Open Challenges

In our survey paper on multi-turn interactions and tasks for large language models (LLMs), we categorize a wide range of tasks, including instruction-following scenarios and more complex conversational engagement tasks. To complement this, we also include an illustration highlighting key open challenges in this domain. If you're interested in the detailed improvement methods and a deeper discussion of the open challenges, please refer to our [Full Paper](https://arxiv.xxx).

![](figs/challenges.png)




