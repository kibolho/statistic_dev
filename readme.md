# Code for AI studies

Based on [Rocketseat](https://www.rocketseat.com.br/) study track.
We have some projects inside this one separated by folders:

1. [EDA Churn data](./eda_sample/eda_churn.ipynb)
2. [Diabetes Model - Linear Regression](./diabetes_model/diabetes_model.ipynb)
3. [Grade Model - Linear Regression](./grade_model/grade_model.ipynb)
4. [Colesterol Model - Multiple Linear Regression](./cholesterol_model/cholesterol_model.ipynb)
5. [Wage Model - Polynomial Regression](./wage_model/wage_model.ipynb)
6. [Semantic Search - OpenAI API - Langchain](./semantic_search/readme.md)
7. [NLP - Starbucks Review Model - Spacy](./nlp_starbucks_review_model/review_model.ipynb)

## Blog Post

You can learn more in my blog [here](https://abilioazevedo.com.br/en/posts/artificial-intelligence).

## Setup

Install [pyenv](https://github.com/pyenv/pyenv) is a tool for managing Python versions. It allows you to install and switch between different versions of Python on the same system. Pyenv is useful for testing applications across different Python versions or ensuring you are using the right version for a project.

Install [pipenv](https://pip.pypa.io/en/stable/getting-started/) is a package and virtual environment manager for Python. It manages Python library dependencies on a per-project basis, allowing you to create a separate virtual environment for each project. Pipenv installs the libraries specified in the Pipfile and generates a Pipfile.lock to pin exact versions. This helps reproduce environments between developers and CI/CD services.

## Start a project

```bash
pipenv install pandas --python 3.11.0
```


# Activate Env
```bash
pipenv shell
```