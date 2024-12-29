# be-mediating (🕊️) [TODO]


```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script nomodule 🕊️="from ~toggleElement?.checked:change to ~moodStone.">({
        isHappy: f.toggleElement
    )}</script>
    <toggle-element disabled></toggle-element>

    <be-hive></be-hive>
</thin-skin>
```

"defer-hydration" also works instead of disabled.



The following table lists different scenarios, and where each alternative enhancement shines

| Scenario                                                                                                                                                                    | Best Fit                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| Calculate the "main property"* based on aggregating values of multiple peer elements.  Registered scripts or scripting expressions a must.                                  | [be-calculating](https://github.com/bahrus/be-calculating)   |
| Pass "constant" properties from the adorned element to peer elements or the host on user interaction. Strictly declarative.                                                 | [be-elevating](https://github.com/bahrus/be-elevating)       |
| Invoke method of host or peer element by name.  Purely declarative.                                                                                                         | [be-invoking](https://github.com/bahrus/be-invoking)         |
| Two way bind, strictly declaratively, between an element and another peer element or the host.                                                                              | [be-bound](https://github.com/bahrus/be-bound)               |
| Observe one or more peer elements and/or the host, and pass in basic aggregated value to one or more local properties.  Mostly declarative, but some script support also.   | [be-observant](https://github.com/bahrus/be-observant)       |
| Use the full power of JavaScript to "mediate" between peer elements and/or the host -- Merging in property values                                                           | [be-mediating](https://github.com/bahrus/be-mediating)       |



\* By "main property" I mean the "most important" property for an element -- textContent for a div, value for the output / input element, href for the anchor tag, for example.

"be-mediating" is the canonical name for this element enhancement, but 
