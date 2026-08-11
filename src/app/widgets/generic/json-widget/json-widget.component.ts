import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseWidget } from '../../base-widget';

@Component({
  selector: 'app-json-widget',

  imports: [JsonPipe],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './json-widget.component.html',
})
export class JsonWidget extends BaseWidget {}
