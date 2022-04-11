export type Launch = {
    "flight_number": number,
    "mission_name": string,
    "mission_id": [],
    "launch_year": string,
    "launch_date_unix": number,
    "launch_date_utc": string,
    "launch_date_local": string,
    "is_tentative": boolean,
    "tentative_max_precision": string,
    "tbd": boolean,
    "launch_window": unknown,
    "rocket": {
        "rocket_id": string,
        "rocket_name": string,
        "rocket_type": string,
        "first_stage": {
            "cores": [
                {
                    "core_serial": string,
                    "flight": number,
                    "block": number,
                    "gridfins": boolean,
                    "legs": boolean,
                    "reused": boolean,
                    "land_success": boolean,
                    "landing_intent": boolean,
                    "landing_type": string,
                    "landing_vehicle": string,
                }
            ]
        },
        "second_stage": {
            "block": number,
            "payloads": [
                {
                    "payload_id": string,
                    "norad_id": number[
                    ],
                    "reused": boolean,
                    "customers": string[
                    ],
                    "nationality": string,
                    "manufacturer": string,
                    "payload_type": string,
                    "payload_mass_kg": number,
                    "payload_mass_lbs": number,
                    "orbit": string,
                    "orbit_params": {
                        "reference_system": string,
                        "regime": string,
                        "longitude": null,
                        "semi_major_axis_km": number,
                        "eccentricity": number,
                        "periapsis_km": number,
                        "apoapsis_km": number,
                        "inclination_deg": number,
                        "period_min": number,
                        "lifespan_years": number,
                        "epoch": string,
                        "mean_motion": number,
                        "raan": number,
                        "arg_of_pericenter": number,
                        "mean_anomaly": number,
                    }
                }
            ]
        },
        "fairings": {
            "reused": null,
            "recovery_attempt": boolean,
            "recovered": null,
            "ship": null
        }
    },
    "ships": [],
    "telemetry": {
        "flight_club": null
    },
    "launch_site": {
        "site_id": string,
        "site_name": string,
        "site_name_long": string,
    },
    "launch_success": boolean,
    "links": {
        "mission_patch": null,
        "mission_patch_small": null,
        "reddit_campaign": string,
        "reddit_launch": string,
        "reddit_recovery": null,
        "reddit_media": string,
        "presskit": null,
        "article_link": string,
        "wikipedia": string,
        "video_link": string,
        "youtube_id": string,
        "flickr_images": string[]
    },
    "details": string,
    "upcoming": false,
    "static_fire_date_utc": string,
    "static_fire_date_unix": 1605619020,
    "timeline": null,
    "crew": null,
    "last_date_update": string,
    "last_ll_launch_date": string,
    "last_ll_update": string,
    "last_wiki_launch_date": string,
    "last_wiki_revision": string,
    "last_wiki_update": string,
    "launch_date_source": string,
}

export type LaunchList = Launch[]