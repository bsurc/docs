# Boise State Research Computing Documentation

Hosted on [Read the docs](https://bsu-docs.readthedocs.io/en/latest/)

Built using [Properdocs](https://properdocs.org")

Uses [MaterialX](https://jaywhj.github.io/mkdocs-materialx/) theme

## To build locally

1. Install [pixi](https://pixi.prefix.dev/latest/)

2. Create the python environment described in `pixi.toml`:
```bash
pixi install
```

3. Build the site and start the docs server:

```bash
pixi run properdocs serve -o
```
