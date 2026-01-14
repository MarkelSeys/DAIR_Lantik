
// src/config.ts
import { ImmutableObject } from 'seamless-immutable'
import { UseDataSource } from 'jimu-core'

export interface FieldConfig {
  name: string // nombre de campo en el datasource
  label?: string // etiqueta a mostrar en el menú
}

export interface Config {
  useDataSource?: UseDataSource
  fields: FieldConfig[]
}

export type IMConfig = ImmutableObject<Config>