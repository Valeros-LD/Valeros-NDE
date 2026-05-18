# Valeros: NDE-compatible, configuration-driven linked data browser

> [!WARNING]  
> This project is currently in active development and not yet ready for production use.

Valeros is a reusable, NDE-compatible linked data browser for [targeted search](https://netwerkdigitaalerfgoed.nl/activiteiten/gedragsprofielen/) and [browsing and discovery](https://netwerkdigitaalerfgoed.nl/activiteiten/gedragsprofielen/) of heritage data.

**For end users**, Valeros provides an intuitive interface to explore, search, and discover heritage collections, without needing to understand the complexities of linked data.

**For developers**, Valeros lets you control what, how, and when data is shown to end users through simple configuration files. No Angular, linked data, or SPARQL knowledge required.

## Architecture

Valeros follows the [NDE vision](https://zenodo.org/records/17541400) of **explicit separation between data and presentation layers**:

- The **data layer** retrieves datasets registered in the [NDE Dataset Register](https://datasetregister.netwerkdigitaalerfgoed.nl/) and provides a standardized API to the presentation layer ([implementation details](https://github.com/netwerk-digitaal-erfgoed/prototypes-data-layers/)).
- The **presentation layer** (this project) consumes the API and allows configuration of how data is displayed to end users.

## Documentation

_TODO: Add link to guide here._

## License

See [LICENSE.md](LICENSE.md)
