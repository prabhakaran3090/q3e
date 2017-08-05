import React, { Component } from 'react';
import { WebView } from 'react-native';   
import HTMLView from 'react-native-htmlview';    

class ViewBook extends Component {    

render() {   
    const html = `
    <p style="text-align: justify;">There are very few algorithmic techniques for which the underlying theory is as precise and clean as what we will discuss here. Let us define the framework. Let S be a set and M be a subset <sup>2</sup> of 2<sup>S</sup>. Then (S,M) is called a subset system if it satisfies the following property</p>
<p><img src="http://qeee.in/coursepack/moodledata_cp/filedir/b3/20/b32078b27eea410056f748ba3c0d09e12c41b441" width="434" height="28" style="display: block; margin-left: auto; margin-right: auto;" /></p>
<p style="text-align: justify;">Note that the empty subset <img src="http://qeee.in/coursepack/moodledata_cp/filedir/10/8a/108a9bc2b72fb450d28e68687e63a41a2a24f30b" width="46" height="17" /> The family of subsets M is often referred to as independent subsets and one may think of M as the feasible subsets.</p>
<p style="text-align: justify;">Example 3.2 For the maximal spanning tree problem on a graph G = (V,E), (E,F) is a matroid where F is the set of all subgraphs without cycles (i.e. all the forests).</p>
<p style="text-align: justify;">For any weight function w : S --&gt;  R<sup>+</sup>, the optimization problem is defined as finding a subset from M for which the cumulative weight of the elements is maximum among all choices of subsets from M. A simple way to construct a subset is the following greedy approach.</p>
<p><img src="http://qeee.in/coursepack/moodledata_cp/filedir/79/a7/79a72999af9d2f7c2feb9f5fe7caa35b5816c5dc" width="342" height="132" style="display: block; margin-left: auto; margin-right: auto;" /></p>
<p style="text-align: justify;">The running time of the algorithm is dependent mainly on the test for independence which depends on the specific problem. M is not given explicitly as it may be very large (even exponential<sup>3</sup>). Instead, a characterization of M is used to perform the test.</p>
<p style="text-align: justify;">What seems more important is the question - Is T the maximum weight subset ?<br />This is answered by the next result</p>
<p style="text-align: justify;">Theorem 3.1 The following are equivalent</p>
<p style="text-align: justify;">1. Algorithm Gen Greedy outputs the optimal subset for any choice of the weight function. Note that in this case the subset system is called a matroid.</p>
<p style="text-align: justify;">2. Exchange property</p>
<p><img src="http://qeee.in/coursepack/moodledata_cp/filedir/72/68/72685bc681b901533979f08e399e51f5fa7d7435" width="431" height="34" style="float: left;" /></p>
<p style="text-align: justify;"></p>
<p style="text-align: justify;"></p>
<p>3. Rank property</p>
<p><img src="http://qeee.in/coursepack/moodledata_cp/filedir/f1/72/f17265a90420f41cf6a306a310256999172cfeab" width="406" height="27" /></p>
<p style="text-align: justify;">The obvious use of the theorem is to establish properties 2 or 3 to justify that a greedy approach works for the problem. On the contrary, we can try to prove that one of the properties doesn't hold (by a suitable counterexample), then greedy cannot always return the optimum subset.</p>
<p style="text-align: justify;">Proof: We will prove it in the following cyclic implications - Property 1 implies Property 2. Then Property 2 implies Property 3 and finally Property 3 implies Property</p>
<p style="text-align: justify;">1. </p>
<p style="text-align: justify;">Property 1 implies Property 2 We will prove it by contradiction. Suppose Property 2 doesn't hold for some subsets s<sub>1</sub> and s<sub>2</sub>. That is, we cannot add any element from s<sub>2</sub>-s<sub>1</sub> to s<sub>1</sub> and keep it independent. Further, wlog, let |s<sub>2</sub>| = p+1 and |s<sub>1</sub>| = p. Let us define a weight function on the elements of S as follows</p>
<p><img src="http://qeee.in/coursepack/moodledata_cp/filedir/b8/76/b87650dd5f647878cf857119a805c1d89d80a3e6" width="285" height="83" style="display: block; margin-left: auto; margin-right: auto;" /></p>
<p style="text-align: justify;">The greedy approach will pick up all elements from s<sub>1</sub> and then it won’t be able to choose any element from s<sub>2 </sub>-<sub> </sub>s<sub>1</sub>. The greedy solution has weight (p+2)|s<sub>1</sub>| = (p+2)·p. By choosing all elements of s<sub>2</sub>, the solution has cost (p+1)·(p+1) which has a higher cost than greedy and hence it is a contradiction of Property 1 that is assumed to be true.</p>
<p style="text-align: justify;">Property 2 implies Property 3 If two maximal subsets of a set A have different cardinality, it is a violation of Property 2. Since both of these sets are independent, we should be able augment the set s<sub>1</sub> with an element from s<sub>2</sub>.</p>
<p style="text-align: justify;">Property 3 implies Property 1 Again we will prove by contradiction. Let e<sub>1</sub>e<sub>2</sub> . . . e<sub>i</sub> . . . e<sub>n</sub> be the edges chosen by the greedy algorithm in decreasing order of their weights. Further, let e'<sub>1</sub>e'<sub>2</sub> . . . e'<sub>i</sub> . . . e'<sub>m</sub> be the edges of an optimal solution in decreasing order - ( Is m = n ?). Since the weight of the greedy solution is not optimal, there must a <img src="http://qeee.in/coursepack/moodledata_cp/filedir/0b/a7/0ba7414d9285feeb975328e86dc64d9fb07d1efd" width="377" height="21" /> The subset {e<sub>1</sub>, e<sub>2</sub> . . . e<sub>j−1</sub>} is maximal with respect to A (Why ?). All the elements in {e'<sub>1</sub>, e'<sub>2</sub> . . . e'<sub>j</sub>} form an independent subset of A that has greater cardinality. This contradicts Property 3. <sub><img src="http://qeee.in/coursepack/moodledata_cp/filedir/d5/d7/d5d7b77b27a57f77587e898cf9a5a843c73d199e" width="30" height="16" /></sub></p>
<p style="text-align: justify;"><strong>Example 3.3 Half Matching Problem</strong> Given a directed graph with non-negative edge weights, find out the maximum weighted subset of edges such that the in-degree of any node is at most 1.</p>
<p style="text-align: justify;">The problem defines a subset system where S is the set of edges and M is the family of all subsets of edges such that no two incoming edges share a vertex. Let us verify Property 2 by considering two subsets S<sub>p</sub> and S<sub>p+1</sub> with p and p + 1 edges respectively. S<sub>p+1</sub> must have at least p + 1 distinct vertices incident on the p + 1 incoming edges and there must be at least one vertex is not part of S<sub>p</sub><sup>'</sup>s vertex set incident to <span>S</span><sub>p</sub><sup>'</sup><span>s</span> incoming edges. Clearly, we can add this edge to S<sub><sup>p</sup></sub> without affecting independence.</p>
<p style="text-align: justify;"><strong>Example 3.4 Weighted Bipartite Matching</strong></p>
<p style="text-align: justify;">Consider a simple graph with a zig-zag. There are two maximal independent sets (set of edges that do not share an end-point), one with cardinality 2 and the other having only 1 edge. There Property 3 is violated.</p>
<p style="text-align: justify;"></p>
<p style="text-align: justify;"></p>
<p style="text-align: justify;"></p>
<p style="text-align: justify;"></p>
    `; 
        return (     
                   <WebView source={{ html }} />
      );
  }
}
 
export default ViewBook;
