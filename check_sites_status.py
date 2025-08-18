#!/usr/bin/env python3
"""
Tarobo Challenge Sites Status Checker
Checks the status of all Tarobo Challenge sites including:
- Accessibility (HTTP status)
- Google Analytics implementation (G-WTY0XBQWC3)
- Response time
- Any errors or issues
"""

import requests
import time
from datetime import datetime
from urllib.parse import urlparse
import re
from typing import Dict, List, Tuple
import json

# List of sites to check
SITES = [
    {
        "name": "ボランティア募集",
        "url": "https://v0-2025-nu.vercel.app/"
    },
    {
        "name": "こども未来チケット",
        "url": "https://tarobo-challenge-kids-clean.vercel.app/"
    },
    {
        "name": "協賛募集",
        "url": "https://tarobochallenge-2025-sponsor.vercel.app/"
    },
    {
        "name": "ふるさと納税",
        "url": "https://tarobo-challenge-furusato-2025.vercel.app/"
    },
    {
        "name": "モニターツアー",
        "url": "https://tarobou-tour.vercel.app/"
    },
    {
        "name": "トレーニング",
        "url": "https://tarobo-challenge-trainingtorace-tk.vercel.app/"
    },
    {
        "name": "メインサイト",
        "url": "https://tarobo-base.vercel.app/"
    },
    {
        "name": "v0-rj",
        "url": "https://v0-rj-ten.vercel.app/"
    },
    {
        "name": "ビジョンサイト",
        "url": "https://tarobo-2026-hiroaki-imashukus-projects.vercel.app/"
    }
]

# Google Analytics ID to check for
GA_ID = "G-WTY0XBQWC3"

def check_site_status(site: Dict[str, str]) -> Dict:
    """
    Check the status of a single site
    
    Args:
        site: Dictionary with 'name' and 'url' keys
        
    Returns:
        Dictionary with check results
    """
    result = {
        "name": site["name"],
        "url": site["url"],
        "timestamp": datetime.now().isoformat(),
        "status_code": None,
        "response_time": None,
        "ga_found": False,
        "ga_id_found": None,
        "errors": [],
        "warnings": []
    }
    
    try:
        # Make request and measure response time
        start_time = time.time()
        response = requests.get(site["url"], timeout=30, allow_redirects=True)
        end_time = time.time()
        
        result["status_code"] = response.status_code
        result["response_time"] = round(end_time - start_time, 3)
        
        # Check if site is accessible
        if response.status_code == 200:
            # Check for Google Analytics
            content = response.text
            
            # Look for GA tracking code patterns
            ga_patterns = [
                r'gtag\s*\(\s*[\'"]config[\'"],\s*[\'"]([^\'\"]+)[\'"]',  # gtag config
                r'ga\s*\(\s*[\'"]create[\'"],\s*[\'"]([^\'\"]+)[\'"]',     # ga create
                r'[\'"]measurement[_-]?[iI]d[\'"]\s*:\s*[\'"]([^\'\"]+)[\'"]',  # measurement ID
                r'G-[A-Z0-9]{10}',  # Direct GA4 ID pattern
                r'UA-[0-9]+-[0-9]+',  # Universal Analytics pattern
            ]
            
            ga_ids_found = []
            for pattern in ga_patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                ga_ids_found.extend(matches)
            
            # Remove duplicates and check if our specific GA ID is present
            ga_ids_found = list(set(ga_ids_found))
            result["ga_id_found"] = ga_ids_found
            result["ga_found"] = GA_ID in ga_ids_found
            
            if not ga_ids_found:
                result["warnings"].append("No Google Analytics tracking code found")
            elif not result["ga_found"]:
                result["warnings"].append(f"Google Analytics found but not the expected ID ({GA_ID}). Found: {', '.join(ga_ids_found)}")
            
            # Check response time
            if result["response_time"] > 5:
                result["warnings"].append(f"Slow response time: {result['response_time']}s")
            elif result["response_time"] > 3:
                result["warnings"].append(f"Response time could be improved: {result['response_time']}s")
                
        else:
            result["errors"].append(f"HTTP {response.status_code} error")
            
    except requests.exceptions.Timeout:
        result["errors"].append("Request timeout (>30s)")
    except requests.exceptions.ConnectionError:
        result["errors"].append("Connection error - site unreachable")
    except requests.exceptions.SSLError:
        result["errors"].append("SSL certificate error")
    except Exception as e:
        result["errors"].append(f"Unexpected error: {str(e)}")
    
    return result

def print_site_result(result: Dict):
    """Print formatted result for a single site"""
    print(f"\n{'='*60}")
    print(f"Site: {result['name']}")
    print(f"URL: {result['url']}")
    print(f"Status: {'✓ OK' if result['status_code'] == 200 else '✗ ERROR'}")
    
    if result['status_code']:
        print(f"HTTP Status Code: {result['status_code']}")
    
    if result['response_time']:
        print(f"Response Time: {result['response_time']}s")
    
    if result['status_code'] == 200:
        if result['ga_found']:
            print(f"Google Analytics: ✓ Found (ID: {GA_ID})")
        elif result['ga_id_found']:
            print(f"Google Analytics: ⚠ Found different ID(s): {', '.join(result['ga_id_found'])}")
        else:
            print("Google Analytics: ✗ Not found")
    
    if result['errors']:
        print("\nErrors:")
        for error in result['errors']:
            print(f"  - {error}")
    
    if result['warnings']:
        print("\nWarnings:")
        for warning in result['warnings']:
            print(f"  - {warning}")

def main():
    """Main function to check all sites"""
    print(f"Tarobo Challenge Sites Status Check")
    print(f"Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Checking {len(SITES)} sites...")
    print(f"Looking for Google Analytics ID: {GA_ID}")
    
    results = []
    total_ok = 0
    total_ga_ok = 0
    
    for site in SITES:
        print(f"\nChecking {site['name']}...", end='', flush=True)
        result = check_site_status(site)
        results.append(result)
        
        if result['status_code'] == 200:
            total_ok += 1
            print(" ✓")
        else:
            print(" ✗")
            
        if result['ga_found']:
            total_ga_ok += 1
    
    # Print detailed results
    print("\n" + "="*60)
    print("DETAILED RESULTS")
    print("="*60)
    
    for result in results:
        print_site_result(result)
    
    # Print summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"Total sites checked: {len(SITES)}")
    print(f"Sites accessible (HTTP 200): {total_ok}/{len(SITES)}")
    print(f"Sites with correct GA ID: {total_ga_ok}/{len(SITES)}")
    
    # List sites with issues
    sites_with_errors = [r for r in results if r['errors']]
    sites_with_warnings = [r for r in results if r['warnings']]
    sites_without_ga = [r for r in results if r['status_code'] == 200 and not r['ga_found']]
    
    if sites_with_errors:
        print(f"\nSites with errors ({len(sites_with_errors)}):")
        for site in sites_with_errors:
            print(f"  - {site['name']}: {', '.join(site['errors'])}")
    
    if sites_without_ga:
        print(f"\nSites without correct GA ID ({len(sites_without_ga)}):")
        for site in sites_without_ga:
            if site['ga_id_found']:
                print(f"  - {site['name']}: Has {', '.join(site['ga_id_found'])} instead")
            else:
                print(f"  - {site['name']}: No GA tracking found")
    
    if sites_with_warnings:
        print(f"\nSites with warnings ({len(sites_with_warnings)}):")
        for site in sites_with_warnings:
            print(f"  - {site['name']}: {', '.join(site['warnings'])}")
    
    # Save results to JSON file
    output_file = f"site_check_results_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump({
            "check_date": datetime.now().isoformat(),
            "ga_id_checked": GA_ID,
            "total_sites": len(SITES),
            "sites_ok": total_ok,
            "sites_with_correct_ga": total_ga_ok,
            "results": results
        }, f, ensure_ascii=False, indent=2)
    
    print(f"\nDetailed results saved to: {output_file}")
    print(f"\nCheck completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

if __name__ == "__main__":
    main()