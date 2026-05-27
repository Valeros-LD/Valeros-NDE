import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NodeModel } from '../node/types/node.model';
import { SearchResponse } from '../../features/search/types/search-response';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  // TODO: Use proper endpoint when available (GET /v1/places/{id})
  placeDetails(id: string): Observable<NodeModel> {
    return of({
      id: 'https://example.org/v1/places/{id}',
      isMockData:
        'Let op: deze data komt niet voor in de oorspronkelijke dataset',
      type: 'Place',
      name: 'Physisch Laboratorium',
      address: {
        type: 'PostalAddress',
        streetAddress: 'Bijlhouwerstraat 6',
        postalCode: '3511 ZC',
        addressLocality: 'Utrecht',
        addressRegion: 'Utrecht',
        addressCountry: 'NL',
      },
      geo: {
        type: 'GeoCoordinates',
        latitude: 52.0815523,
        longitude: 5.1203423,
      },
    });
  }

  // TODO: Use proper endpoint when available (GET /v1/organizations/{id})
  organizationDetails(id: string): Observable<NodeModel> {
    return of({
      id: 'https://example.org/v1/organizations/{id}',
      isMockData:
        'Let op: deze data komt niet voor in de oorspronkelijke dataset',
      type: 'Organization',
      name: 'Example Museum',
      location: {
        id: 'https://example.org/v1/places/{id}',
        type: 'Place',
        name: 'Office location',
      },
    });
  }

  // TODO: Use proper endpoint when available (GET /v1/persons/{id})
  personDetails(id: string): Observable<NodeModel> {
    return of({
      id: 'https://example.org/v1/persons/{id}',
      isMockData:
        'Let op: deze data komt niet voor in de oorspronkelijke dataset',
      type: 'Person',
      name: 'John Doe',
      birthPlace: {
        id: 'https://example.org/v1/places/{id}',
        type: 'Place',
        name: 'Utrecht',
      },
      birthDate: '1871-01-01',
      deathPlace: {
        id: 'https://example.org/v1/places/{id}',
        type: 'Place',
        name: 'Amsterdam',
      },
      deathDate: '1941-12-31',
      hasOccupation: [
        {
          id: 'https://example.org/v1/occupations/{id}',
          type: 'Occupation',
          name: 'Schilder',
        },
      ],
    });
  }

  // TODO: Use proper endpoint when available (GET /v1/occupations/{id})
  occupationDetails(id: string): Observable<NodeModel> {
    return of({
      id: 'https://example.org/v1/occupations/{id}',
      isMockData:
        'Let op: deze data komt niet voor in de oorspronkelijke dataset',
      type: 'Occupation',
      name: 'Schilder',
    });
  }

  // TODO: Use proper endpoint when available (GET /v1/media-objects/{id})
  mediaObjectDetails(id: string): Observable<NodeModel> {
    return of({
      id: 'https://example.org/v1/media-objects/{id}',
      isMockData:
        'Let op: deze data komt niet voor in de oorspronkelijke dataset',
      type: ['MediaObject', 'ImageObject'],
      license: {
        id: 'https://example.org/v1/licenses/{id}',
        type: 'CreativeWork',
        name: 'Creative Commons: publieke domein',
      },
      copyrightNotice:
        '© 2025 Example Museum, with permission from Ph. Otographer',
      contentUrl: 'https://collections.uu.nl/IIIF/33832/full/max/0/default.jpg',
      thumbnailUrl:
        'https://collections.uu.nl/IIIF/33832/full/!512,512/0/default.jpg',
      isBasedOn: {
        id: 'https://collections.uu.nl/IIIF/33832',
        encodingFormat:
          "application/ld+json;profile='http://iiif.io/api/image/3/context.json'",
      },
    });
  }

  // TODO: Use proper endpoint when available (GET /v1/licenses/{id})
  licenseDetails(id: string): Observable<NodeModel> {
    return of({
      id: 'https://example.org/v1/licenses/{id}',
      isMockData:
        'Let op: deze data komt niet voor in de oorspronkelijke dataset',
      type: 'CreativeWork',
      name: 'Creative Commons: publieke domein',
      isBasedOn: {
        id: 'https://creativecommons.org/public-domain/cc0/',
        type: 'CreativeWork',
      },
    });
  }

  // TODO: Use proper endpoint when available (GET /v1/terms/{id})
  termDetails(id: string): Observable<NodeModel> {
    return of({
      id: 'https://example.org/v1/terms/{id}',
      isMockData:
        'Let op: deze data komt niet voor in de oorspronkelijke dataset',
      type: 'DefinedTerm',
      name: 'fotoafdruk zwart-wit',
      image: 'https://picsum.photos/seed/fotoafdruk-zwart-wit/200/200',
    });
  }

  // TODO: Use proper endpoint when available (GET /v1/datasets/{id})
  datasetDetails(id: string): Observable<NodeModel> {
    return of({
      id: 'https://example.org/v1/datasets/{id}',
      isMockData:
        'Let op: deze data komt niet voor in de oorspronkelijke dataset',
      type: 'Dataset',
      name: 'Example Dataset',
      publisher: {
        id: 'https://example.org/v1/organizations/{id}',
        type: 'Organization',
        name: 'Example Museum',
      },
      license: {
        id: 'https://example.org/v1/licenses/{id}',
        type: 'CreativeWork',
        name: 'Creative Commons: publieke domein',
      },
    });
  }

  private generateRandomPlace(): any {
    const cities = [
      { name: 'Utrecht (mock data)', lat: 52.09, lon: 5.12 },
      { name: 'Amsterdam (mock data)', lat: 52.37, lon: 4.89 },
      { name: 'Rotterdam (mock data)', lat: 51.92, lon: 4.48 },
      { name: 'Den Haag (mock data)', lat: 52.08, lon: 4.31 },
      { name: 'Groningen (mock data)', lat: 53.22, lon: 6.56 },
    ];

    const city = cities[Math.floor(Math.random() * cities.length)];
    const latVariation = (Math.random() - 0.5) * 0.2;
    const lonVariation = (Math.random() - 0.5) * 0.2;

    return {
      id: '404',
      type: 'Place',
      name: city.name,
      geo: {
        type: 'GeoCoordinates',
        latitude: city.lat + latVariation,
        longitude: city.lon + lonVariation,
      },
    };
  }

  addRandomPlaceObject(node: NodeModel): NodeModel {
    const enrichedNode: NodeModel = { ...node };

    const locationProperty = 'location';
    if (!(locationProperty in enrichedNode)) {
      enrichedNode[locationProperty] = this.generateRandomPlace();
    }

    return enrichedNode;
  }

  enrichNodeWithMockData(node: NodeModel): NodeModel {
    return this.addRandomPlaceObject(node);
  }

  enrichSearchResponseWithMockData(response: SearchResponse): SearchResponse {
    return {
      ...response,
      orderedItems: response.orderedItems.map((node: NodeModel) =>
        this.enrichNodeWithMockData(node),
      ),
    };
  }
}
