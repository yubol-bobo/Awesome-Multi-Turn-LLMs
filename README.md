# Awesome-Multi-Turn-LLMs

![](https://img.shields.io/badge/PaperNumber-92-brightgreen)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of **Papers**, **Datasets** and **Code Repositories** for ***Multi-turn Large Language Models***. This repository compiles a majority of research works in the multi-turn LLM field, though it may not be fully exhaustive.

⭐⭐⭐Our detailed thoughts and review of multi-turn LLMs, including task types, common improvements, and open challenges, are presented in this survey: [**Beyond Single-Turn: A Survey on Multi-Turn Interactions with Large Language Models**](https://arxiv.xxx).
> If you notice any missing research works or spot inaccuracies, feel free to reach out or open an issue. We also welcome submissions of multi-turn related work from everyone!


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

![](https://img.shields.io/badge/Dataset-blue) New dataset created in the work.

![](https://img.shields.io/badge/Benchmark-red) Benchmark proposed in the work.

![](https://img.shields.io/badge/SFT-blueviolet) SFT used in the work.

![](https://img.shields.io/badge/RL-purple) Reinforcement Learning used in the work.

![](https://img.shields.io/badge/Other-yellow) Other improvement method(s) used in the work.



## Multi-Turn LLM Tasks

### Instruction Following Tasks

#### Instruction Following in General (Mixed)  (Total: 13)

- Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena [[NeurIPS 2023](https://arxiv.org/abs/2306.05685)] [[GitHub](https://github.com/lm-sys/fastchat)] ![](https://img.shields.io/badge/Dataset-blue)  ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/Other-yellow)
- (MT-Bench++) Parrot: Enhancing Multi-Turn Instruction Following for Large Language Models [[ACL 2024](https://aclanthology.org/2024.acl-long.525/)] [[Hugging Face](https://huggingface.co/datasets/anon8231489123/ShareGPT_Vicuna_unfiltered)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/RL-purple)
- MT-Eval: A Multi-Turn Capabilities Evaluation Benchmark for Large Language Models [[EMNLP 2024](https://aclanthology.org/2024.emnlp-main.1124/)] [[GitHub](https://github.com/KwanWaiChung/MT-Eval)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- MT-Bench-101: A Fine-Grained Benchmark for Evaluating Large Language Models in Multi-Turn Dialogues [[ACL 2024](https://aclanthology.org/2024.acl-long.401/)] [[GitHub](https://github.com/mtbench101/mt-bench-101)] ![](https://img.shields.io/badge/Dataset-blue) 
               ![](https://img.shields.io/badge/SFT-blueviolet)  ![](https://img.shields.io/badge/RL-purple) ![](https://img.shields.io/badge/Benchmark-red)

- M2Lingual: Enhancing Multilingual, Multi-Turn Instruction Alignment in Large Language Models [[arXiv](https://arxiv.org/abs/2406.16783)] [[Hugging Face](https://huggingface.co/datasets/ServiceNow-AI/M2Lingual)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- FB-Bench: A Fine-Grained Multi-Task Benchmark for Evaluating LLMs' Responsiveness to Human Feedback [[arXiv](https://www.arxiv.org/abs/2410.09412)] [[GitHub](https://github.com/PKU-Baichuan-MLSystemLab/FB-Bench)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red) 
- Multi-IF: Benchmarking LLMs on Multi-Turn and Multilingual Instructions Following [[arXiv](https://arxiv.org/abs/2410.15553)] [[GitHub](https://github.com/facebookresearch/Multi-IF)] [[Hugging Face](https://huggingface.co/datasets/facebook/Multi-IF)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- FairMT-Bench: Benchmarking Fairness for Multi-turn Dialogue in Conversational LLMs [[ICLR 2025](https://openreview.net/forum?id=RSGoXnS9GH)] [[GitHub](https://github.com/FanZT6/FairMT-bench)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- AQA-Bench: An Interactive Benchmark for Evaluating LLMs' Sequential Reasoning Ability
 [[arXiv](https://arxiv.org/abs/2402.09404)] [[GitHub](https://github.com/UCSC-VLAA/AQA-Bench)] ![](https://img.shields.io/badge/Benchmark-red)
- MINT: Evaluating LLMs in Multi-turn Interaction with Tools and Language Feedback [[ICLR 2024](https://arxiv.org/abs/2309.10691)] [[GitHub](https://github.com/xingyaoww/mint-bench)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/RL-purple)
- WILT: A Multi-Turn, Memorization-Robust Inductive Logic Benchmark for LLMs [[arXiv](https://arxiv.org/abs/2410.10998)] [[GitHub](https://github.com/riotgames/wilt)] ![](https://img.shields.io/badge/Benchmark-red)
- Firm or Fickle? Evaluating Large Language Models Consistency in Sequential Interactions [[arXiv](https://arxiv.org/abs/2503.22353)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- SysBench: Can Large Language Models Follow System Messages? [[ICLR 2025](https://openreview.net/pdf?id=KZWaxtzIRx)]  [[GitHub](https://github.com/pku-baichuan-mlsystemlab/sysbench)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)



#### Instruction Following in Math (Total: 3)
- MathChat: Converse to Tackle Challenging Math Problems with LLM Agents [[ICLR 2024 Workshop](https://openreview.net/pdf/96ec2baf0844fd84504bb79f9230483b1a62f517.pdf)] 
                  ![](https://img.shields.io/badge/RL-purple)
- Building Math Agents with Multi-Turn Iterative Preference Learning [[arXiv](https://arxiv.org/pdf/2409.02392)] 
                  ![](https://img.shields.io/badge/Other-yellow)
- MathChat: Benchmarking Mathematical Reasoning and Instruction Following in Multi-Turn Interactions [[arXiv](https://arxiv.org/abs/2405.19444)][[GitHub](https://github.com/Zhenwen-NLP/MathChat)] 
                  ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)


#### Instruction Following in General Coding (Total: 13)
- Debug like a Human: A Large Language Model Debugger via Verifying Runtime Execution Step by Step [[ACL 2024](https://aclanthology.org/2024.findings-acl.49/)][[GitHub](https://github.com/FloridSleeves/LLMDebugger)] ![](https://img.shields.io/badge/Other-yellow)
- Steering Large Language Models between Code Execution and Textual Reasoning [[ICLR 2025](https://openreview.net/forum?id=5X5Z7Ffrjb)][[GitHub](https://yongchao98.github.io/CodeSteer/)] [[Hugging Face](https://huggingface.co/yongchao98/CodeSteer-v1)] 
![](https://img.shields.io/badge/Benchmark-red)
- From Code to Correctness: Closing the Last Mile of Code Generation with Hierarchical Debugging[[arXiv](https://arxiv.org/abs/2410.01215)][[GitHub](https://github.com/YerbaPage/MGDebugger)]
- InterCode: Standardizing and Benchmarking Interactive Coding with Execution Feedback [[NeurIPS 2023 Datasets and Benchmarks](https://openreview.net/forum?id=fvKaLF1ns8)][[GitHub](https://intercode-benchmark.github.io/)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/RL-purple) 
- What Makes Large Language Models Reason in (Multi-Turn) Code Generation? [[arXiv](https://arxiv.org/abs/2410.08105)] ![](https://img.shields.io/badge/SFT-blueviolet)
- PyBench: Evaluating LLM Agent on various real-world coding tasks [[arXiv](https://arxiv.org/abs/2407.16732)] [[GitHub](https://github.com/Mercury7353/PyBench)][[Hugging Face](https://huggingface.co/datasets/Mercury7353/PyInstruct)] ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/Dataset-blue)
- CodeGen: An Open Large Language Model for Code with Multi-Turn Program Synthesis [[ICLR 2023](https://openreview.net/forum?id=iaYcJKpY2B_)] [[GitHub](https://github.com/salesforce/CodeGen/tree/main)] [[Hugging Face](https://huggingface.co/models?search=salesforce+codegen)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/Other-yellow)
- CodeGen2: Lessons for Training LLMs on Programming and Natural Languages [[ICLR 2023](https://arxiv.org/abs/2305.02309)][[GitHub](https://github.com/salesforce/CodeGen/tree/main)] [[Hugging Face](https://huggingface.co/models?search=salesforce+codegen)]  ![](https://img.shields.io/badge/Other-yellow)
- CodeSteer: Symbolic-Augmented Language Models via Code/Text Guidance [[arXiv](https://arxiv.org/abs/2502.04350)][[GitHub](https://github.com/yongchao98/CodeSteer-v1.0?tab=readme-ov-file)] [[Hugging Face](https://huggingface.co/yongchao98/CodeSteer-v1)] ![](https://img.shields.io/badge/Benchmark-red)  ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/RL-purple)
- OpenCodeInterpreter: Integrating Code Generation with Execution and Refinement [[ACL 2024](https://aclanthology.org/2024.findings-acl.762/)] [[GitHub](https://opencodeinterpreter.github.io/)] [[Hugging Face](https://huggingface.co/papers/2402.14658)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- Executable Code Actions Elicit Better LLM Agents [[ICML 2024](https://proceedings.mlr.press/v235/wang24h.html)]  [[GitHub](https://github.com/xingyaoww/code-act)] [[Hugging Face](https://huggingface.co/datasets/xingyaoww/code-act)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- EHRAgent: Code Empowers Large Language Models for Few-shot Complex Tabular Reasoning on Electronic Health Records [[EMNLP 2024](https://aclanthology.org/2024.emnlp-main.1245/)] [[GitHub](https://github.com/wshi83/EhrAgent)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Other-yellow)
- Evaluating and Enhancing LLMs for Multi-turn Text-to-SQL with Multiple Question Types [[IJCNN 2025](https://arxiv.org/abs/2412.17867)] [[GitHub](https://github.com/mcxiaoxiao/MMSQL)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/Other-yellow)



  
### Conversational Engagement Tasks 

#### Conversational Engagement in Roleplay (Total: 25)

- PersonaLLM: Investigating the Ability of Large Language Models to Express Personality Traits [[ACL 2024](https://aclanthology.org/2024.findings-naacl.229.pdf)] [[GitHub](https://github.com/hjian42/PersonaLLM)]
- CharacterChat: Learning towards Conversational AI with Personalized Social Support [[arXiv](https://arxiv.org/abs/2308.10278)]  [[GitHub](https://github.com/morecry/CharacterChat)] 
                  ![](https://img.shields.io/badge/Dataset-blue)
- Better Zero-Shot Reasoning with Role-Play Prompting [[ACL 2024](https://aclanthology.org/2024.naacl-long.228.pdf)] [[GitHub](https://github.com/NKU-HLT/Role-Play-Prompting)
- PIPPA: A Partially Synthetic Conversational Dataset [[arXiv](https://arxiv.org/abs/2308.05884)] [[Hugging Face](https://huggingface.co/datasets/PygmalionAI/PIPPA)] 
                  ![](https://img.shields.io/badge/Dataset-blue)
- Enhancing Chat Language Models by Scaling High-quality Instructional Conversations [[EMNLP 2023](https://aclanthology.org/2023.emnlp-main.183.pdf)] [[GitHub](https://github.com/thunlp/UltraChat)]   
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Other-yellow)
- PRODIGy: a PROfile-based DIalogue Generation dataset [[ACL 2024](https://aclanthology.org/2024.findings-naacl.222.pdf)] [[GitHub](https://github.com/LanD-FBK/prodigy-dataset)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- ChatHaruhi: Reviving Anime Character in Reality via Large Language Model [[arXiv](https://arxiv.org/abs/2308.09597)] [[GitHub](https://github.com/LC1332/Chat-Haruhi-Suzumiya)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Other-yellow)
- CharacterGLM: Customizing Chinese Conversational AI Characters with Large Language Models [[EMNLP 2024](https://aclanthology.org/2024.emnlp-industry.107.pdf)] [[GitHub](https://github.com/thu-coai/CharacterGLM-6B)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- RoleCraft-GLM: Advancing Personalized Role-Playing in Large Language Models [[ACL 2024](https://aclanthology.org/2024.personalize-1.1.pdf)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- Large Language Models are Superpositions of All Characters: Attaining Arbitrary Role-play via Self-Alignment [[ACL 2024](https://aclanthology.org/2024.acl-long.423.pdf)] [[GitHub](https://github.com/OFA-Sys/Ditto)]  
                  ![](https://img.shields.io/badge/Dataset-blue)  ![](https://img.shields.io/badge/Other-yellow)
- Character-LLM: A Trainable Agent for Role-Playing [[EMNLP 2023](https://aclanthology.org/2023.emnlp-main.814v2.pdf)] [[GitHub](https://github.com/choosewhatulike/trainable-agents)] 
                  ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Other-yellow)
- PersonaPKT: Building Personalized Dialogue Agents via Parameter-efficient Knowledge Transfer [[ACL 2023](https://aclanthology.org/2023.sustainlp-1.21.pdf)]  
                  ![](https://img.shields.io/badge/Other-yellow)
- LLMs + Persona-Plug = Personalized LLMs [[arXiv](https://arxiv.org/abs/2409.11901)] [[Hugging Face](https://huggingface.co/papers/2409.11901)] 
                  ![](https://img.shields.io/badge/Other-yellow)
- Neeko: Leveraging dynamic lora for efficient multi-character role-playing agent [[EMNLP 2024](https://aclanthology.org/2024.emnlp-main.697.pdf)] [[GitHub](https://github.com/weiyifan1023/Neeko)] 
                  ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Other-yellow)
-  Instruct Once, Chat Consistently in Multiple Rounds: An Efficient Tuning Framework for Dialogue [[ACL 2024](https://aclanthology.org/2024.acl-long.219.pdf)] [[GitHub](https://github.com/iwangjian/Midi-Tuning)] 
                  ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Other-yellow)
-  Building Persona Consistent Dialogue Agents with Offline Reinforcement Learning [[EMNLP 2023](https://aclanthology.org/2023.emnlp-main.110.pdf)] 
                  ![](https://img.shields.io/badge/RL-purple)   ![](https://img.shields.io/badge/Other-yellow) 
-  Beyond Retrieval: Embracing Compressive Memory in Real-World Long-Term Conversations [[arXiv](https://arxiv.org/abs/2402.11975)] [[GitHub](https://github.com/nuochenpku/COMEDY)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/RL-purple) ![](https://img.shields.io/badge/Other-yellow)
- LaMP: When Large Language Models Meet Personalization [[ACL 2024](https://aclanthology.org/2024.acl-long.399.pdf)] [[GitHub](https://lamp-benchmark.github.io/)] ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- CharacterEval: A Chinese Benchmark for Role-Playing Conversational Agent Evaluation [[ACL 2024](https://aclanthology.org/2024.acl-long.638.pdf)] [[GitHub](https://github.com/morecry/CharacterEval)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- RoleEval: A Bilingual Role Evaluation Benchmark for Large Language Models [[arXiv](https://arxiv.org/abs/2312.16132)] [[GitHub](https://github.com/Magnetic2014/RoleEval)]  
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- TimeChara: Evaluating Point-in-Time Character Hallucination of Role-Playing Large Language Models  [[ACL 2024](https://aclanthology.org/2024.findings-acl.197/)] [[GitHub](https://github.com/ahnjaewoo/timechara)]  ![](https://img.shields.io/badge/Dataset-blue)
                   ![](https://img.shields.io/badge/Benchmark-red)
- InCharacter: Evaluating Personality Fidelity in Role-Playing Agents through Psychological Interviews [[ACL 2024](https://aclanthology.org/2024.acl-long.102/)] [[GitHub](https://incharacter.github.io/)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- RoleInteract: Evaluating the Social Interaction of Role-Playing Agents [[arXiv](https://arxiv.org/abs/2403.13679)] [[GitHub](https://github.com/X-PLUG/RoleInteract)]  
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- SIMULBENCH: Evaluating Language Models with Creative Simulation Tasks [[arXiv](https://arxiv.org/abs/2409.07641)] [[GitHub](https://github.com/SimulBench/SimulBench)] [[Hugging Face](https://huggingface.co/datasets/SimulBench/SimulBench)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- Evaluating Character Understanding of Large Language Models via Character Profiling from Fictional Work [[EMNLP 2024](https://aclanthology.org/2024.emnlp-main.456/)] [[GitHub](https://github.com/Joanna0123/character_profiling)]  
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)

#### Conversational Engagement in Healthcare (Total: 21)
- Data Set and Benchmark (MedGPTEval) to Evaluate Responses From Large Language Models in Medicine: Evaluation Development and Validation [[JMIR Med Inform](https://medinform.jmir.org/2024/1/e57674)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- Clinical Camel: An Open-Source Expert-Level Medical Language Model with Dialogue-Based Knowledge Encoding [[CoRR 2023](https://arxiv.org/pdf/2305.12031v2)]
                   ![](https://img.shields.io/badge/Other-yellow) ![](https://img.shields.io/badge/SFT-blueviolet)
- HuatuoGPT, towards Taming Language Model  to Be a Doctor [[arXiv](https://arxiv.org/pdf/2305.15075)] [[GitHub](https://github.com/FreedomIntelligence/HuatuoGPT)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- DISC-MedLLM: Bridging General Large Language Models and Real-World Medical Consultation [[arXiv](https://arxiv.org/pdf/2308.14346)] [[GitHub](https://github.com/FudanDISC/DISC-MedLLM)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/RL-purple)
- SMILE: Single-turn to Multi-turn Inclusive Language Expansion via  ChatGPT for Mental Health Support  [[EMNLP 2024](https://aclanthology.org/2024.findings-emnlp.34/)] [[GitHub](https://github.com/qiuhuachuan/smile)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- Zhongjing: Enhancing the Chinese Medical Capabilities of Large Language Model through Expert Feedback and Real-world Multi-turn Dialogue [[arXiv](https://arxiv.org/pdf/2308.03549)] [[GitHub](https://github.com/SupritYoung/Zhongjing)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/RL-purple)
- An Automatic Evaluation Framework for Multi-turn Medical Consultations Capabilities of Large Language Models [[arXiv](https://arxiv.org/abs/2309.02077)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- BianQue: Balancing the Questioning and Suggestion Ability of Health LLMs with Multi-turn Health Conversations Polished by ChatGPT [[arXiv](https://arxiv.org/abs/2310.15896)] [[GitHub](https://github.com/scutcyr/BianQue)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- Qilin-Med: Multi-stage Knowledge Injection Advanced Medical Large Language Model [[arXiv](https://arxiv.org/abs/2310.09089)]
                   ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/RL-purple) ![](https://img.shields.io/badge/Other-yellow) 
- Towards Conversational Diagnostic AI [[arXiv](https://arxiv.org/abs/2401.05654)]
                   ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Other-yellow) 
- CPsyCoun: A Report-based Multi-turn Dialogue Reconstruction and Evaluation Framework for Chinese Psychological Counseling [[arXiv](https://arxiv.org/abs/2405.16433)] [[GitHub](https://github.com/CAS-SIAT-XinHai/CPsyCoun)]
                   ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) 
- Automatic Interactive Evaluation for Large Language Models with State Aware Patient Simulator [[arXiv](https://arxiv.org/abs/2403.08495)] [[GitHub](https://github.com/bluezeros/automatic_interactive_evaluation)]
                   ![](https://img.shields.io/badge/Benchmark-red)
- HuatuoGPT-II, One-stage Training for Medical Adaption of LLMs [[COLM 2024](https://arxiv.org/abs/2311.09774)] [[GitHub](https://github.com/FreedomIntelligence/HuatuoGPT-II)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Other-yellow) ![IJCNN 2024](https://img.shields.io/badge/RL-purple)
- Aqulia-Med LLM: Pioneering Full-Process Open-Source Medical Language Models [[arXiv](https://arxiv.org/abs/2406.12182)] [[Hugging Face](https://huggingface.co/BAAI/AquilaMed-RL)]
                  ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/RL-purple) ![](https://img.shields.io/badge/Other-yellow) 
- T-Agent: A Term-Aware Agent for Medical Dialogue Generation [[IJCNN 2024](https://ieeexplore.ieee.org/document/10650649/)]
                  ![](https://img.shields.io/badge/Other-yellow) 
- MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning [[NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/hash/32b80425554e081204e5988ab1c97e9a-Abstract-Conference.html)] [[Hugging Face](https://huggingface.co/datasets/stellalisy/mediQ)] [[GitHub](https://github.com/stellalisy/mediQ)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- BiMediX: Bilingual Medical Mixture of Experts LLM [[arXiv](https://arxiv.org/abs/2402.13253)] [[Hugging Face](https://huggingface.co/BiMediX)] [[GitHub](https://github.com/mbzuai-oryx/BiMediX)] 
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) 
- PsycoLLM: Enhancing LLM for Psychological Understanding and Evaluation [[IEEE Trans. Comput. Soc.](https://ieeexplore.ieee.org/document/10772313)] [[GitHub](https://github.com/MACLAB-HFUT/PsycoLLM)]
                  ![](https://img.shields.io/badge/SFT-blueviolet) 
- Interactive Evaluation for Medical LLMs via Task-oriented Dialogue System [[COLING 2025](https://aclanthology.org/2025.coling-main.325/)] [[GitHub](https://github.com/lry00127/MMD-Eval)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)
- Ask Patients with Patience: Enabling LLMs for Human-Centric Medical Dialogue with Grounded Reasoning [[arXiv](https://arxiv.org/abs/2502.07143)] [[GitHub](https://github.com/SuperMedIntel/AskPatients)]
                  ![](https://img.shields.io/badge/Other-yellow) 
- An Automatic Evaluation Framework for Multi-turn Medical Consultations Capabilities of Large Language Models [[arXiv](https://arxiv.org/abs/2309.02077)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/Benchmark-red)


#### Conversational Engagement in Education (Total: 9)
- SocraticLM: Exploring Socratic Personalized Teaching with Large Language Models [[NeurIPS 2024](https://openreview.net/pdf?id=qkoZgJhxsA)] [Code](https://github.com/Ljyustc/SocraticLM)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet) ![](https://img.shields.io/badge/Other-yellow)
- MathDial: A Dialogue Tutoring Dataset with Rich Pedagogical Properties Grounded in Math Reasoning Problems [[EMNLP 2023](https://aclanthology.org/2023.findings-emnlp.372/)] [[GitHub](https://github.com/eth-nlped/mathdial)] [[Hugging Face](https://huggingface.co/datasets/eth-nlped/mathdial)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- Boosting Large Language Models with Socratic Method for Conversational Mathematics Teaching  [[ACM](https://dl.acm.org/doi/10.1145/3627673.3679881)]  [[GitHub](https://github.com/ECNU-ICALK/SocraticMath)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)
- MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors [[arXiv](https://arxiv.org/pdf/2502.18940)] [[GitHub](https://github.com/eth-lre/mathtutorbench)] 
                  ![](https://img.shields.io/badge/Benchmark-red) ![](https://img.shields.io/badge/SFT-blueviolet) 
- Instruct, Not Assist: LLM-based Multi-Turn Planning and Hierarchical Questioning for Socratic Code Debugging  [[EMNLP 2024](https://aclanthology.org/2024.findings-emnlp.553.pdf)]  [[GitHub](https://github.com/agarwalishika/TreeInstruct)]
- Towards the Pedagogical Steering of Large Language Models for Tutoring: A Case Study with Modeling Productive Failure [[arXiv](https://arxiv.org/abs/2410.03781)]  [[GitHub](https://github.com/RomainPuech/StratL-Pedagogical-Steering-of-LLMs-for-Tutoring)]
- One Size doesn't Fit All: A Personalized Conversational Tutoring Agent for Mathematics Instruction [[arXiv](https://arxiv.org/abs/2502.12633)]
- A Step Towards Adaptive Online Learning: Exploring the Role of GPT as Virtual Teaching Assistants in Online Education
- Book2Dial: Generating Teacher-Student Interactions from Textbooks for Cost-Effective Development of Educational Chatbots [[ACL 2024](https://aclanthology.org/2024.findings-acl.578/)] [[Github](https://github.com/eth-lre/book2dial)]
                  ![](https://img.shields.io/badge/Dataset-blue) ![](https://img.shields.io/badge/SFT-blueviolet)

#### Conversational Engagement in Jailbreak (Total: 8)
- Crescendo: Great, Now Write an Article About That: The Crescendo Multi-Turn LLM Jailbreak Attack [[arXiv](https://arxiv.org/abs/2404.01833)] [[GitHub](https://crescendo-the-multiturn-jailbreak.github.io/)]
- ActorAttack: Derail Yourself: Multi-turn LLM Jailbreak Attack through Self-discovered Clues [[arXiv](https://arxiv.org/abs/2410.10700)] [[GitHub](https://github.com/AI45Lab/ActorAttack)] [[Hugging Face](https://huggingface.co/datasets/SafeMTData/SafeMTData)] ![](https://img.shields.io/badge/Dataset-blue)
- Emerging Vulnerabilities in Frontier Models: Multi-Turn Jailbreak Attacks [[arXiv](https://arxiv.org/abs/2409.00137)] [[Hugging Face](https://huggingface.co/datasets/tom-gibbs/multi-turn_jailbreak_attack_datasets)] ![](https://img.shields.io/badge/Dataset-blue)
- Speak Out of Turn: Safety Vulnerability of Large Language Models in Multi-turn Dialogue [[arXiv](https://arxiv.org/abs/2402.17262)]
- Imposter.AI: Adversarial Attacks with Hidden Intentions towards Aligned Large Language Models [[arXiv](https://arxiv.org/abs/2407.15399)]
- MRJ-Agent: An Effective Jailbreak Agent for Multi-Round Dialogue [[arXiv](https://arxiv.org/abs/2411.03814)]
- RED QUEEN: Safeguarding Large Language Models against Concealed Multi-Turn Jailbreaking [[arXiv](https://arxiv.org/abs/2409.17458)] [[GitHub](https://github.com/kriti-hippo/red_queen)]
- When "Competency" in Reasoning Opens the Door to Vulnerability: Jailbreaking LLMs via Novel Complex Ciphers [[arXiv](https://arxiv.org/abs/2402.10601)] [[GitHub](https://github.com/DivijH/jailbreak_cryptography)]


## Open Challenges

In our survey paper on multi-turn interactions and tasks for large language models (LLMs), we categorize a wide range of tasks, including instruction-following scenarios and more complex conversational engagement tasks. To complement this, we also include an illustration highlighting key open challenges in this domain. If you're interested in the detailed improvement methods and a deeper discussion of the open challenges, please refer to our [Full Paper](https://arxiv.xxx).

![](figs/challenges.png)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=cmu-bobo/Awesome-Multi-Turn-LLMs&type=Date)](https://www.star-history.com/#cmu-bobo/Awesome-Multi-Turn-LLMs&Date)




