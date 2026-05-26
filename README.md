# Valeros - Flexible heritage data browser

> [!WARNING]  
> This project is currently in active development and not yet ready for production use.

Valeros is a reusable and flexible heritage data browser. We focus on two main [user profiles](zenodo.org/records/14938780):

1. Targeted search
2. Browsing and discovery

## Architecture

Valeros follows the [NDE vision](https://zenodo.org/records/17541400) of **explicit separation between data and presentation layers**:

- The **data layer** retrieves datasets registered in the [NDE Dataset Register](https://datasetregister.netwerkdigitaalerfgoed.nl/) and provides a standardized API to the presentation layer ([implementation details](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/)).
- The **presentation layer** (this project) consumes the API and allows configuration of how data is displayed to end users.

## Documentation

_TODO: Add link to guide here._

## License

See [LICENSE.md](LICENSE.md)
