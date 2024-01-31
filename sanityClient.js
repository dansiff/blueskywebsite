import { createClient } from 'next-sanity';
import { config } from './sanity.config'; // Adjust the import path as needed

export const sanityClient = createClient(config);
