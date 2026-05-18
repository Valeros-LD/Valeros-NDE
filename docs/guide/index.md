# What is Valeros?

Valeros is a reusable, NDE-compatible linked data browser. It is designed as a standard solution for [targeted search](https://zenodo.org/records/14938780) and [browsing and discovery](https://zenodo.org/records/14938780) of heritage data.

For end users, it provides an intuitive interface to explore, search, and discover heritage collections, without needing to understand the complexities of linked data.

As a developer, Valeros lets you control what, how, and when data is shown to end users through simple configuration files. **No Angular, linked data, or SPARQL knowledge required.**

## Key Features

- **NDE-compatible** - Complies with the [NDE vision](https://zenodo.org/records/17541400) for heritage data presentation
- **Configuration-driven development** - Control the user experience through simple configuration files
- **Built-in widgets** for common use cases (maps, images, IIIF viewers, etc., or [create your own](/guide/custom-widgets))
- **View-specific configurations** - Different layouts for different contexts (show data as list, grid, map, or [create your own](/guide/custom-views))

## Architecture

::: warning TODO
Add a Mermaid diagram here to visualize the architecture
:::

Valeros follows the [NDE vision](https://zenodo.org/records/17541400) of **explicit separation between data and presentation layers**:

- The **data layer** retrieves datasets registered in the [**NDE Dataset Register**](https://datasetregister.netwerkdigitaalerfgoed.nl/) and provides a standardized API
- The **presentation layer** (this project) consumes the API and allows configuration of how data is displayed

## Next Steps

- [Get started](/guide/getting-started) with installation and basic usage
- Learn about the [widget system](/guide/widget-system)
- Explore [built-in widgets](/guide/built-in-widgets)
