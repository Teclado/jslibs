# Javascript libraries

Some small libraries for Javascript

# Point in polygon

In order to know if a point is inside a polygon, there are two main fast algorithms used widely: **crossing number** (or even-odd) and **winding number** (or non-zero). They disagree in the result of the regions between the cut points of the polygon with itself.

## Crossing number

This consists of drawing a half line in an arbitrary direction from the point whose membership in the polygon is to be tested. If this line crosses the polygon an even number of times or not at all, it is considered outside the polygon. If not, it is considered inside.

## Winding number

The winding number of a closed curve with respect to a point that is not on its perimeter is the number of complete loops around the point that the polygon makes when travels counterclockwise. With the latter it is understood that if at a certain moment while traversing the curve, the direction of rotation with respect to the point changes to clockwise, the angle that is traversed on it will have to be subtracted from the index that is being calculated.

This algorithm obtains this number from the curve traced by a polygon with respect to a point. If said value is zero, it is understood that the point is outside the polygon; and that it is inside it if it takes any other value.
