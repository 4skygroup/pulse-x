import { Helmet } from "react-helmet-async";

const BASE_URL = "https://pulsexagency.com";
const DEFAULT_IMAGE = `${BASE_URL}/logoPulseX.png`;

interface SeoProps {
    title: string;
    description: string;
    path: string;
    image?: string;
    schema?: object;
}

export default function Seo({ title, description, path, image = DEFAULT_IMAGE, schema }: SeoProps) {
    const url = `${BASE_URL}${path}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {schema && (
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            )}
        </Helmet>
    );
}
